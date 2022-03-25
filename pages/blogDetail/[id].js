import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Mixpanel } from '../../services/mixpanel'
import { useRouter } from 'next/router';
import { Button } from 'antd'
import DemoForm from '../../components/demoForm'
import LayoutPrimary from '../../common/layoutPrimary'
import Link from 'next/link'
import Image from 'next/image'

// Images
import logoTheme from "../../assets/logo-brown.svg"
import arrowNext from "../../assets/icons/arrow-next.svg"
import { NextSeo } from 'next-seo';
import Head from 'next/head'


const BlogDetail = () => {
	const router = useRouter();

	console.log("🚀 ~ file: [id].js ~ line 21 ~ BlogDetail ~ router", router)

	// const { asPath, state } = useRouter()
	let pathArr = router.asPath?.split('/')
	let id = pathArr[pathArr?.length - 1]

	const [data, setData] = useState({})

	useEffect(() => {
		axios.get(`https://cms-api.unberry.com/api/v1/article/${id}`).then(res => {
			setData(res?.data?.data)
			Mixpanel.track(`Blog Opened: ${res?.data?.data?.heading}`);
			window.dataLayer.push({
				event: 'blogOpened',
				category: 'blog',
				label: res?.data?.data?.heading
			})
			document.title = `Unberry | ${res?.data?.data?.heading || 'Blog'}`
		}).catch(e => {
			console.log('blog detail err', e)
		})
	}, [id])

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	}, [])


	const seoModifiedHtml = (html) => {
		return `<div itemprop="description">
                ${html}
                </div>`
	}
	

	return (
		<>
		<Head>
			<title>{router?.query?.title} | Unberry</title>
			</Head>
			<LayoutPrimary footer>
				<div className='blog-detail-section'>
					<div className='header-style'>
						<div className='blog-layout'>
							<div className='info-section'>
								<Link href="/"><a><Image src={logoTheme} className='logo-white' alt="logo" /></a></Link>
								<Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
							</div>
							<div>
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
									<Image src={arrowNext} alt="" /><span>Back</span>
								</a>
								<h2 className='title2'>{data?.heading}</h2>
							</div>
						</div>
					</div>
					<div className='markdown-layout'>
						{/* <div className="img-round">
                        <img className='img-blog' src={data?.bannerImage} alt={data?.heading} />
                    </div> */}
						<ReactMarkdown
							className='markdown-style'
							children={data?.articleContent}
							rehypePlugins={[rehypeRaw]}
							remarkPlugins={[remarkGfm]} />
					</div>
				</div>
				<DemoForm id="bookDemo" />
			</LayoutPrimary>
		</>
	);
};

export default BlogDetail;
