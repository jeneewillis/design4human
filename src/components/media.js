import React, { useState, useEffect } from "react";
import { ButtonGroup, Button, Row, Col, Image, Container, Card } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";

/* channelId: UC3tu5BLETBLJcmC54Dbx_AA */
/* key: AIzaSyCwbFPOCCGrdMfaDdjwAR2FFcFUN6mt-uw */

const tubeFetchURI = "https://www.googleapis.com/youtube/v3/search/";
const tubeKey = "AIzaSyCwbFPOCCGrdMfaDdjwAR2FFcFUN6mt-uw";
const channelID = "UC3tu5BLETBLJcmC54Dbx_AA";

const Media = () => {
	const [videoList, setVideoList] = useState([]);
	const [nextToken, setNextToken] = useState('');
	const [prevToken, setPrevToken] = useState('');
	const [hoveredItem, setHoveredItem] = useState(9999)

	useEffect(() => {
		fetchList(tubeFetchURI, tubeKey, channelID, 20, null)
	}, [])

	const fetchList = (yUri, key, chId, pageSize, pToken) => {
		let youtubeURI = yUri;
		let configHeader = {
			Accept: "application/json",
		};
		axios({
			url: youtubeURI,
			method: "get",
			headers: configHeader,
			params: {
				key: key,
				channelId: chId,
				part: "snippet",
				maxResults: pageSize,
				pageToken: pToken
			},
		}).then(function (response) {
			setVideoList(response.data.items);
			setNextToken(response.data.nextPageToken);
			setPrevToken(response.data.prevPageToken);
			window.scrollTo(0, 0);
		}).catch(function (error) {
			console.log(error);
		});
	}

	const goNext = () => {
		fetchList(tubeFetchURI, tubeKey, channelID, 20, nextToken);
	}
	const goPrev = () => {
		fetchList(tubeFetchURI, tubeKey, channelID, 20, prevToken);
	}

	return (
		<>
			<div className="landing-section landing-bg-gradiant">
				<Container className="pb-5">
					<Row>
						{
							videoList.map((videoItem, index) => (
								<Col sm={6} md={4} lg={3} key={index}>
									<a href={videoItem.id.kind === "youtube#video" ? "https://youtube.com/watch?v=" + videoItem.id.videoId : "https://youtube.com/playlist?list=" + videoItem.id.playlistId} style={{ textDecoration: "none" }} target="_blank">
										<Card onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(9999)} className={"bg-white mt-4 mb-1 " + (hoveredItem === index ? "shadow-sm" : "")} style={{ borderRadius: "12px", overflow: "hidden", height: "350px", transition: "0.2s" }}>
											<Card className="w-100 h-75 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
												<Image className="position-absolute " src={videoItem.snippet.thumbnails.high.url} style={{ minHeight: "100%", maxWidth: "none", minWidth: "100%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
											</Card>
											<div className="p-2 w-100">
												<p className="w-100 font-weight-bold mb-1 text-primary" style={{ fontSize: "15px", overflow: "hidden", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", textOverflow: "ellipsis", display: "-webkit-box" }}>{videoItem.snippet.title}</p>
												<p className="w-100 mb-0 text-truncate font-weight-bold text-secondary" style={{ fontSize: "15px" }}>{videoItem.snippet.channelTitle}</p>
											</div>
										</Card>
									</a>
								</Col>
							))
						}
					</Row>
					<div className="w-100 d-flex justify-content-center mt-4">
						<ButtonGroup className="mx-auto">
							<Button onClick={goPrev} style={{borderRadius: "40px 0 0 40px"}} disabled={!prevToken} variant="dark">Prev Page</Button>
							<Button onClick={goNext} style={{borderRadius: "0 40px 40px 0"}} disabled={!nextToken} variant="dark">Next Page</Button>
						</ButtonGroup>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Media;
