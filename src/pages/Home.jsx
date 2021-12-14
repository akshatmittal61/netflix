import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import bg from "../images/bg0.jpg";
import tv from "../images/tv.png";
import mobile from "../images/mobile.jpg";
import boxShot from "../images/boxshot.png";
import downIcon from "../images/download-icon.gif";
import devicePile from "../images/device-pile.png";
import kids from "../images/kids.png";
import videoDevices from "../videos/video-devices-in.m4v";
import videoTv from "../videos/video-tv.m4v";
import { Link } from "react-router-dom";

const Home = () => {
	const [email, setEmail] = useState("");
	return (
		<section className="home">
			<div className="home-container">
				<div
					className="home-hero"
					style={{
						backgroundImage: `url(${bg}), linear-gradient(
                            rgba(0,0,0,0.7),
                            rgba(0,0,0,0.5),
                            rgba(0,0,0,0.1),
                            rgba(0,0,0,0.5),
                            rgba(0,0,0,0.7)
                            )`,
					}}
				>
					<div className="home-hero__header">
						<Header transparent />
					</div>
					<div className="home-hero__content">
						<div className="home-hero__content-text">
							<span className="home-hero__content__h1">
								Unlimited movies, TV shows and more.
							</span>
							<span className="home-hero__content__h2">
								Watch anywhere. Cancel anytime.
							</span>
							<span className="home-hero__content__h4">
								Ready to watch? Enter your email to create or
								restart your membership.
							</span>
						</div>
						<div className="home-hero__content-form">
							<form className="home-hero__content__form">
								<input
									placeholder="Email address"
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Button
									text="Get Started"
									haveIcon
									icon="arrow_forward_ios"
									iconPos="right"
									type="submit"
									size="large"
								/>
							</form>
						</div>
					</div>
					<div className="home-hero__foot"></div>
				</div>
				<div className="home-section">
					<div className="home-section-content">
						<h1 className="home-section-content__h1">
							Enjoy on your TV.
						</h1>
						<h2 className="home-section-content__h2">
							Watch on smart TVs, PlayStation, Xbox, Chromecast,
							Apple TV, Blu-ray players and more.
						</h2>
					</div>
					<div className="home-section-media">
						<img src={tv} className="home-section-media__img" />
						<video autoPlay muted loop>
							<source src={videoTv} type="video/mp4"></source>
						</video>
					</div>
				</div>
				<div className="home-section">
					<div className="home-section-content">
						<h1 className="home-section-content__h1">
							Download your shows to watch offline.
						</h1>
						<h2 className="home-section-content__h2">
							Save your favourites easily and always have
							something to watch.
						</h2>
					</div>
					<div className="home-section-media">
						<img src={mobile} className="home-section-media__img" />
						<div className="home-section-media-box">
							<div className="home-section-media-box-image">
								<img
									className="home-section-media-box-image__img"
									src={boxShot}
								/>
							</div>
							<div className="home-section-media-box-text">
								<span>Stranger Things</span>
								<span>Downloading...</span>
							</div>
							<div className="home-section-media-box-after">
								<img
									className="home-section-media-box-after__img"
									src={downIcon}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="home-section">
					<div className="home-section-content">
						<h1 className="home-section-content__h1">
							Watch everywhere.
						</h1>
						<h2 className="home-section-content__h2">
							Stream unlimited movies and TV shows on your phone,
							tablet, laptop, and TV.
						</h2>
					</div>
					<div className="home-section-media">
						<img
							src={devicePile}
							className="home-section-media__img"
							style={{
								width: "85%",
							}}
						/>
						<video
							autoPlay
							muted
							loop
							style={{
								top: "0",
							}}
						>
							<source
								src={videoDevices}
								type="video/mp4"
							></source>
						</video>
					</div>
				</div>
				<div className="home-section">
					<div className="home-section-content">
						<h1 className="home-section-content__h1">
							Create profiles for children.
						</h1>
						<h2 className="home-section-content__h2">
							Send children on adventures with their favourite
							characters in a space made just for them—free with
							your membership.
						</h2>
					</div>
					<div className="home-section-media">
						<img src={kids} className="home-section-media__img" />
					</div>
				</div>
				<div className="home-section home-hero">
					<div
						className="home-hero__content"
						style={{ width: "80%" }}
					>
						<div className="home-hero__content-text">
							<span className="home-hero__content__h4">
								Ready to watch? Enter your email to create or
								restart your membership.
							</span>
						</div>
						<div className="home-hero__content-form">
							<form className="home-hero__content__form">
								<input
									placeholder="Email address"
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Button
									text="Get Started"
									haveIcon
									icon="arrow_forward_ios"
									iconPos="right"
									type="submit"
									size="large"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
			<footer className="home-footer">
				<div className="home-footer-top">
					<span>
						Questions? Call &nbsp;
						<a href="tel:000-800-040-1843">000-800-040-1843</a>
					</span>
				</div>
				<div className="home-footer-mid">
					<div className="row">
						<div className="col-lg-25 col-md-25 col-sm-50">
							<div className="home-footer-mid-row__col">
								<Link to="/faq">FAQ</Link>
								<Link to="/ir">Investor Relations</Link>
								<Link to="/legal/privacy">Privacy</Link>
								<Link to="/fast">Speed test</Link>
							</div>
						</div>
						<div className="col-lg-25 col-md-25 col-sm-50">
							<div className="home-footer-mid-row__col">
								<Link to="/help">Help Centre</Link>
								<Link to="/jobs">Jobs</Link>
								<Link to="/legal/cookie-preferences">
									Cookie Preferences
								</Link>
								<Link to="/legal/notices">Legal Notices</Link>
							</div>
						</div>
						<div className="col-lg-25 col-md-25 col-sm-50">
							<div className="home-footer-mid-row__col">
								<Link to="/youraccount">Account</Link>
								<Link to="/watch">Ways to Watch</Link>
								<Link to="/legal/corpinfo">
									Corporate Information
								</Link>
								<Link to="/browse">Only on Netflix</Link>
							</div>
						</div>
						<div className="col-lg-25 col-md-25 col-sm-50">
							<div className="home-footer-mid-row__col">
								<Link to="/media">Media Centre</Link>
								<Link to="/legal/terms-of-use">
									Terms of Use
								</Link>
								<Link to="/legal/contact-us">Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="home-footer-bottom">
					<div className="home-footer-bottom__button">
						<Button
							text="Sign In"
							containsLink
							link="/login"
							size="small"
						/>
					</div>
					<div className="home-footer-bottom__country">
						Netflix India
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Home;
