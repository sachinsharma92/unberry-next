/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import LayoutPrimary from "../../common/layoutPrimary";
import { Mixpanel } from "../../services/mixpanel";

// Images
import FooterPrimary from "../../common/footerPrimary";
import HeaderPrimary from "../../common/headerPrimary";
import SubscribeCard from "../../common/subscribe";
import BookADemo from "../../components/homepage/bookADemo";
import UpNextCard from "../../components/blogs/upNextCard";

const BlogDetail = ({ heading }) => {
	const router = useRouter();
	let pathArr = router.asPath?.split("/");
	let id = pathArr[pathArr?.length - 1];
	// console.log("🚀 ~ file: [id].js ~ line 23 ~ BlogDetail ~ id", id)

	const [data, setData] = useState({});

	let params = { slug: id };

	useEffect(() => {
		axios
			.get(`https://cms-api.unberry.com/api/v1/article/`, { params })
			.then((res) => {
				console.log(res?.data?.data[0], "hhhhsahshshassah");
				setData(res?.data?.data[0]);
				Mixpanel.track(`Blog Opened: ${res?.data?.data[0]?.heading}`);
				window.dataLayer.push({
					event: "blogOpened",
					category: "blog",
					label: res?.data?.data[0]?.heading,
				});
				document.title = `Unberry | ${res?.data?.data[0]?.heading || "Blog"}`;
			})
			.catch((e) => {
				console.log("blog detail err", e);
			});
	}, []);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<Head>
				<title>{heading}</title>
				<meta
					property="og:image"
					content="https://unberry.com/static/ogImage.png"
				/>
				<meta
					name="twitter:image"
					content="https://unberry.com/static/ogImage.png"
				/>
			</Head>
			<LayoutPrimary>
				<div className="blog-detail-section">
					<HeaderPrimary />

					<div className="blog-layout">
						<div className="blog-header">
							<h2 className="title2">{data?.heading}</h2>
						</div>
					</div>

					<div className="hero-banner-img">
						<img
							className="img-blog"
							src={data?.bannerImage}
							alt={data?.heading}
						/>
					</div>

					<div className="content-blog-layout">
						<ReactMarkdown
							className="markdown-style"
							rehypePlugins={[rehypeRaw]}
							remarkPlugins={[remarkGfm]}
						>
							{data?.articleContent}
						</ReactMarkdown>

						<div className="sidebar">
							<SubscribeCard socialShow />
						</div>
					</div>
				</div>

				<UpNextCard />

				<div className="footer-section">
					<BookADemo />
					<FooterPrimary />
				</div>


			</LayoutPrimary>
		</>
	);
};

export default BlogDetail;

BlogDetail.getInitialProps = async (ctx) => {
	const { asPath } = ctx;
	let pathArr = asPath?.split("/");
	let id = pathArr[pathArr?.length - 1];
	let params = { slug: id };
	const res = await axios.get(`https://cms-api.unberry.com/api/v1/article/`, {
		params,
	});
	return { heading: res?.data?.data[0]?.heading };
};
