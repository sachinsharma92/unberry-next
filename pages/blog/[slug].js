/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ImageCustom from "../../common/ImageCustom";
import LayoutPrimary from "../../common/layoutPrimary";
import SubscribeCard from "../../common/subscribe";
import UpNextCard from "../../components/blogs/upNextCard";
import { Mixpanel } from "../../services/mixpanel";

// Images

const BlogDetail = ({ heading, bannerImage }) => {
	const [headerColor, setHeaderColor] = useState("white")
	const router = useRouter();
	let pathArr = router.asPath?.split("/");
	let id = pathArr[pathArr?.length - 1];
	const [data, setData] = useState({});
	let params = { slug: id };
	const { asPath } = useRouter();

	// Menu Color change after scroll 360
	const listenScrollEvent = () => {
		window.scrollY > 360
			? setHeaderColor("menu-white")
			: setHeaderColor("")
	}
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent)
	})


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
	}, [asPath]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		document.body.className = 'blog-detaul-mode';
	});

	// console.log(bannerImage, 'check banner');

	return (
		<>
			<Head>
				<title>{heading}</title>
				<meta property="og:image" content={bannerImage} />
				<meta name="twitter:image" content={bannerImage} />
			</Head>

			<LayoutPrimary className={`blog-detail-section ${headerColor}`} backHander={() => router.back()}>
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

				<UpNextCard currentData={data} />
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
	return { heading: res?.data?.data[0]?.heading, bannerImage: res?.data?.data[0]?.bannerImage };
};
