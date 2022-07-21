import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinnie For Your Thoughts</title>
        <link rel="icon" href="/pinnie.svg" />
      </Head>
      <div style={styles.header}>
        <Link href="login">Login</Link>
      </div>
      <div style={styles.flex}>
        <Image
          width="80px"
          height="80px"
          src="/pinnie.svg"
          alt="Pinnie the pinata"
        />
        <h1>Pinnie For Your Thoughts</h1>
        <p>Where Web3 meets Web2.</p>
        <div style={styles.flexRow}>
          <form onSubmit={() => console.log("subscribing")}>
            <input style={styles.input} type="email" placeholder="Type your email" />
            <button type="submit" style={styles.btn}>Subscribe</button>
          </form>
        </div>
        <div style={styles.sample}>
          <Link href="sample">Read a Sample First</Link>
        </div>        
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    justifyContent: "flex-end",
    paddingRight: "10px",
    paddingTop: 10,
  },
  flex: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50, 
    width: 250, 
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,     
    border: "1px solid rgb(255, 224, 0)",
    borderRight: "none", 
    padding: 10
  },
  btn: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,  
    outline: "none",
    border: "none", 
    background: "rgb(255, 224, 0)", 
    width: 150,
    height: "100%",
    cursor: "pointer"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  sample: {
    marginTop: 40
  }
};