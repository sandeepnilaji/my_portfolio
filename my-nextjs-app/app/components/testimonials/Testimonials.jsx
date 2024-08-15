import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Clone of Netmeds.com",
      title: "",
      img: "assets/netmeds_icon.png",
      icon: "https://www.apemockups.com/wp-content/uploads/edd/2017/09/medium-logo-black-transparent.png",
      desc: "Hello readers, myself Sandeep Nilaji , a student of Masai School with my teammates Kishan, Prakhar, and Anurag were told to clone the Netmeds website. Netmeds is an .....",
      link: "https://sandeepnilaji.medium.com/cloning-netmeds-website-b08fe7752ab3",
    },
    {
      id: 2,
      name: "Clone of Pepperfry.com",
      title: "",
      img: "assets/pepperfry_icon.jpeg",
      icon: "https://www.apemockups.com/wp-content/uploads/edd/2017/09/medium-logo-black-transparent.png",
      desc: "Hello Guys, my name is Sandeep Nilaji, through this blog I am going to take you through the journey of cloning Pepperfry.com. Pepperfry is an Indian online marketplace for furniture .....",
      featured: true,
      link: "https://sandeepnilaji.medium.com/clone-of-pepperfry-com-1ef767e9d71e",
    },
  ];

  return (
    <div className="testimonials" id="blogs">
      <h1>Blogs</h1>
      <div className="container">
        {data.map((d, i) => (
          <div className={`card ${d.featured ? "featured" : ""}`} key={i}>
            <div className="top">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="center">
              <p>{d.desc}</p>
            </div>
            <div className="bottom">
              <div className="text-black text-[16px]">{d.name}</div>
              <h4>{d.title}</h4>
              <a href={d.link} target="_blank" rel="noreferrer">
                <button>Read More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
