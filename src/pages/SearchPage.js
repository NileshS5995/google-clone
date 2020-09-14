import React from 'react';
import  './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch  from './../useGoogleSearch';
import { Link } from 'react-router-dom';
import Response from './response';
import Search  from './../components/Search';
import SearchInput  from './../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
// Custom Search JSON API for the API Key
// https://developers.google.com/custom-search/v1/using_rest

// for context key
// https://programmablesearchengine.google.com/cse/setup/basic?cx=ec2daab9f37033007
// https://cse.google.com/cse/create/new

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    // const { data } = useGoogleSearch(term); // remove comments for Live API 
    const data = Response; // add comments for Live API
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"></img>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                   <div className="searchPage__options">
                       <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon /> 
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon /> 
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon /> 
                                <Link to="/image">Image</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon /> 
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon /> 
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon /> 
                                <Link to="/more">More</Link>
                            </div>
                       </div>
                       <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                Setting 
                            </div>
                            <div className="searchPage__option">
                                Tools
                            </div>
                       </div>
                   </div>
                </div>
            </div>
            {true && (
            <div className="searchPage__results">
                <p className="searchPage__resultCount">
                    About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds) for {term}
                </p>
                {data?.items?.map(item => (
                    <div className="searchPage__result">
                       <a href={item?.link}>
                           {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src && (
                               <img  className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src}/>
                           )}
                           <h2>{item.displayLink}</h2>
                       </a>
                       <a href={item?.link} className="searchPage__resultTitle">
                           {item?.title}
                       </a>
                       <p className="searchPage__resultSnippet">{item.snippet}</p>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default SearchPage;