import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Sample = () => {
  const [content, setContent] = useState(null);
  const router = useRouter();
  const { sid } = router.query;
  useEffect(() => {
    if (sid) {
      loadContent(sid);
    }
  }, [sid]);

  const loadContent = async (id) => {
	  const res = await axios.get(`https://gateway.pinata.cloud/ipfs/${id}`);
	  console.log('res:', res)
	  setContent(res.data);
  };

  return (
    <div>
      <div style={styles.nav}>
        <Link href="/">{"< Back"}</Link>
      </div>
      <div style={styles.main} className="blog-post">
			  <ReactMarkdown source={content} allowDangerousHtml={true} />
			  
      </div>
	<div>
	{sid ? sid : 'nope'}
      </div>
    </div>
  );
};

const styles = {
  nav: {
    position: "fixed", 
    width: "100%",
    top: 0, 
    left: 0,
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 20
  }, 
  main: {
    marginTop: 60
  }
};

export default Sample;