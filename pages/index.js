import Layout from '../component/Layout'

import fetch from 'isomorphic-unfetch'

import Price from '../component/Price'
const Index =(props)=>{
return(
	<Layout>
	<div>
	<h1>Welcome to Bitcoin Price </h1>
		<Price bpi={props.bpi}/>

	</div>
	</Layout>
	)
}


Index.getInitialProps = async function(){
	const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
	const data = await res.json();
	    console.log(`Show me the value	${data.length}`)

	return {
	bpi : data.bpi
}

}
export default Index