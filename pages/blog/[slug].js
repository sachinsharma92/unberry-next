/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import buttonIcon from "../../assets/new/icons/back.svg";
import LayoutPrimary from "../../common/layoutPrimary";
import SubscribeCard from "../../common/subscribe";
import UpNextCard from "../../components/blogs/upNextCard";
import { Mixpanel } from "../../services/mixpanel";

// Images

const BlogDetail = ({ heading }) => {
	const [headerColor, setHeaderColor] = useState("white")
	const router = useRouter();
	let pathArr = router.asPath?.split("/");
	let id = pathArr[pathArr?.length - 1];
	const [data, setData] = useState({});
	let params = { slug: id };


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
	}, []);

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

	return (
		<>
			<Head>
				<title>{heading}</title>
				<meta property="og:image" content="https://www.unberry.com/ogImage.png" />
				<meta name="twitter:image" content="https://www.unberry.com/ogImage.png" />
			</Head>

			<LayoutPrimary className={`blog-detail-section ${headerColor}`}>
				<div className="blog-layout">
					<button className="back-btn" onClick={() => router.back()}>
						<Image src={buttonIcon} alt='image services' width="26" height="26" /> GO BACK
					</button>
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

				<UpNextCard />
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
