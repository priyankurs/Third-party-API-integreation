import Navbar from "./Navbar"


const Layout =(props)=>{
	return (
		<div>
		<head>
		<title>BitCoin Price in INR</title>
		<link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css"/>
		</head>
		<Navbar/>
		{props.children}
		</div>
		)

}

export default Layout