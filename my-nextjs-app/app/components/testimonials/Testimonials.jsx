import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Clone of Netmeds.com",
      title: "",
      img: "https://lh3.googleusercontent.com/82kwWllorYs3-eyy6L1t6Vx4x9xdlB9hZ8LRz-P_KpnO_MHitvPL3Xw1m_eu46V1Gwc=w300",
      icon: "https://www.apemockups.com/wp-content/uploads/edd/2017/09/medium-logo-black-transparent.png",
      desc: "Hello readers, myself Sandeep Nilaji , a student of Masai School with my teammates Kishan, Prakhar, and Anurag were told to clone the Netmeds website. Netmeds is an .....",
      link: "https://sandeepnilaji.medium.com/cloning-netmeds-website-b08fe7752ab3",
    },
    {
      id: 2,
      name: "Clone of Pepperfry.com",
      title: "",
      img: "https://clipground.com/images/pepperfry-logo-clipart-7.jpg",
      icon: "https://www.apemockups.com/wp-content/uploads/edd/2017/09/medium-logo-black-transparent.png",
      desc: "Hello Guys, my name is Sandeep Nilaji, through this blog I am going to take you through the journey of cloning Pepperfry.com. Pepperfry is an Indian online marketplace for furniture .....",
      featured: true,
      link: "https://sandeepnilaji.medium.com/clone-of-pepperfry-com-1ef767e9d71e",
    },
  ];
  return (
    <div className="testimonials" id="blogs">
      <h1 style={{ color: "aliceblue" }}>Blogs</h1>
      <div className="container">
        {data.map((d, i) => (
          <div
            className={d.featured ? "card featured" : "card"}
            key={i + "idx"}
          >
            <div className="top">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="center">
              <p style={{ textAalign: "justify", color: "#101010" }}>
                {d.desc}
              </p>
            </div>
            <div className="bottom">
              <h3 style={{ marginBottom: "10px" }}>{d.name}</h3>
              <h4>{d.title}</h4>
              <a rel="noreferrer" href={d.link} target="_blank">
                {" "}
                <button
                  style={{
                    border: "none",
                    background: "#c573e6e1",
                    color: "white",
                    cursor: "pointer",
                    height: "35px",
                    borderRadius: "10px",
                  }}
                >
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
