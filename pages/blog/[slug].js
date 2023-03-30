/* eslint-disable @next/next/no-img-element */
import { Button } from 'antd'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import LayoutPrimary from '../../common/layoutPrimary'
import SocialShareIcons from '../../common/socialShareIcons'
import DemoForm from '../../components/demoForm'
import { Mixpanel } from '../../services/mixpanel'

// Images
import arrowNext from "../../assets/icons/arrow-next.svg"
import logoTheme from "../../assets/logo-brown.svg"

const BlogDetail = ({ heading }) => {
	const router = useRouter();
	let pathArr = router.asPath?.split('/')
	let id = pathArr[pathArr?.length - 1]
	// console.log("🚀 ~ file: [id].js ~ line 23 ~ BlogDetail ~ id", id)

	const [data, setData] = useState({})

	let params = { slug: id };

	useEffect(() => {
		axios.get(`https://cms-api.unberry.com/api/v1/article/`,
			{ params }
		).then(res => {
			console.log(res?.data?.data[0], 'hhhhsahshshassah')
			setData(res?.data?.data[0])
			Mixpanel.track(`Blog Opened: ${res?.data?.data[0]?.heading}`);
			window.dataLayer.push({
				event: 'blogOpened',
				category: 'blog',
				label: res?.data?.data[0]?.heading
			})
			document.title = `Unberry | ${res?.data?.data[0]?.heading || 'Blog'}`
		}).catch(e => {
			console.log('blog detail err', e)
		})
	}, [])



	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	}, [])

	return (
		<>
			<Head>
				<title>{heading}</title>
				<meta property="og:image" content="https://unberry.com/static/ogImage.png" />
				<meta
					name="twitter:image"
					content="https://unberry.com/static/ogImage.png"
				/>
			</Head>
			<LayoutPrimary footer>
				<div className='blog-detail-section'>
					<div className='header-style'>
						<div className='info-section'>
							<div>
								<Link href="/"><a><Image src={logoTheme} className='logo-white' alt="logo" /></a></Link>
								<a className='btn-back'
									onClick={() => {
										if (router?.query?.backTo) {
											router.push(router?.query?.backTo)
										}
										else {
											router.push('/')
										}
									}}
								>
									<Image src={arrowNext} alt="" />
								</a>
							</div>
							<Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
						</div>
						<div className='blog-layout'>
							<h2 className='title2'>{data?.heading}</h2>
						</div>
					</div>

					<div className='hero-banner-img'>
						<img className='img-blog' src={data?.bannerImage} alt={data?.heading} />
					</div>

					<div className='markdown-layout'>
						<ReactMarkdown
							className='markdown-style'
							rehypePlugins={[rehypeRaw]}
							remarkPlugins={[remarkGfm]}>{data?.articleContent}</ReactMarkdown>
					</div>
				</div>
				<DemoForm id="bookDemo" />

				<SocialShareIcons />
			</LayoutPrimary>
		</>
	);
};

export default BlogDetail;

BlogDetail.getInitialProps = async (ctx) => {
	const { asPath } = ctx
	let pathArr = asPath?.split('/')
	let id = pathArr[pathArr?.length - 1]
	let params = { slug: id };
	const res = await axios.get(`https://cms-api.unberry.com/api/v1/article/`, { params })
	return { heading: res?.data?.data[0]?.heading }
}