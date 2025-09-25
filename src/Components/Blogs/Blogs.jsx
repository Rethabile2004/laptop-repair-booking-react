import '/src/Components/Blogs/Blogs.css'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Blogs(){
    const [selected,setSelected]=useState(-1);
    // const navigate=useNavigate();
    const blogs = [
  {
    title: "Basic computer concepts",
    description: "Understanding the fundamentals of computer systems and their components.",
    img: "/src/assets/img2.jpg",
    article: "Before diving into laptop specs, it's essential to grasp basic computer concepts. A computer consists of hardware (physical components) and software (programs and operating systems). Key hardware includes the CPU (brain of the computer), RAM (temporary memory), storage (SSD/HDD), and GPU (graphics processor). Software includes the OS (like Windows or macOS) and applications. Understanding how these parts interact helps users make informed decisions when choosing a laptop for work, study, or gaming."
  },
  {
    title: "How to choose the right laptop",
    description: "A guide to selecting a laptop based on your needs and budget.",
    img: "/src/assets/img3.jpg",
    article: "Choosing the right laptop starts with identifying your use case. Are you a student, gamer, designer, or business professional? For students, portability and battery life matter most. Gamers need powerful GPUs and cooling systems. Designers benefit from high-resolution displays and color accuracy. Business users prioritize reliability and security features. Budget also plays a role—entry-level laptops offer basic functionality, while premium models deliver top-tier performance. Always consider processor type (Intel vs AMD), RAM size (8GB minimum), storage (SSD preferred), and screen quality."
  },
  {
    title: "Laptop performance explained",
    description: "Understand how CPU, RAM, and storage affect your laptop's speed.",
    img: "/src/assets/img4.jpg",
    article: "Laptop performance hinges on three main components: CPU, RAM, and storage. The CPU handles all computations—Intel Core i5/i7 or AMD Ryzen 5/7 are solid choices for most users. RAM determines multitasking ability; 8GB is the baseline, but 16GB is ideal for power users. Storage affects boot and load times—SSDs are significantly faster than HDDs. Other factors include GPU (for gaming or creative work), thermal design (to prevent overheating), and battery optimization. A balanced configuration ensures smooth performance without overspending."
  },
  {
    title: "Windows vs macOS vs ChromeOS",
    description: "Compare operating systems to find the best fit for your workflow.",
    img: "/src/assets/img5.jpg",
    article: "Windows is versatile and compatible with most software, making it ideal for general users, gamers, and professionals. macOS offers a polished experience with strong integration across Apple devices—great for creatives and developers. ChromeOS is lightweight and cloud-focused, perfect for students and casual users. Each OS has strengths: Windows supports extensive hardware, macOS excels in design and stability, and ChromeOS is budget-friendly and secure. Your choice should align with your software needs, ecosystem preferences, and budget."
  },
  {
    title: "Laptop consultation: What to expect",
    description: "How our consultation service helps you find the perfect laptop.",
    img: "/src/assets/img6.jpg",
    article: "Our laptop consultation service is designed to simplify your buying journey. We start by understanding your needs—whether it's study, work, gaming, or creative tasks. Then we assess your budget, preferred brands, and performance expectations. Based on this, we recommend tailored options with clear pros and cons. We also guide you through warranty, upgrade paths, and accessories. The goal is to eliminate confusion and help you invest in a laptop that truly fits your lifestyle. Booking a consultation ensures expert advice and peace of mind."
  },
  {
    title: "Common laptop myths debunked",
    description: "Separate fact from fiction when it comes to laptop buying.",
    img: "/src/assets/img7.jpg",
    article: "Myth: More cores always mean better performance. Truth: It depends on your workload—browsing and office tasks don't need 12 cores. Myth: Macs don’t get viruses. Truth: They’re less targeted, but not immune. Myth: You need 32GB RAM for gaming. Truth: Most games run fine on 16GB. Myth: SSDs don’t fail. Truth: They’re faster and more reliable than HDDs, but still vulnerable. Our consultations help you navigate these myths and focus on what truly matters for your use case."
  },
  {
    title: "Top laptop brands compared",
    description: "A look at leading laptop manufacturers and what they offer.",
    img: "/src/assets/img8.jpg",
    article: "Dell is known for business reliability and strong customer support. HP offers a wide range from budget to premium, with sleek designs. Lenovo excels in productivity and keyboard quality, especially in ThinkPads. Apple delivers premium build and ecosystem integration. ASUS and Acer cater to gamers and creatives with powerful specs at competitive prices. Each brand has strengths—our consultation helps match you with the right one based on your priorities like durability, service, and performance."
  },
  {
    title: "Laptop care and maintenance tips",
    description: "Extend your laptop’s lifespan with proper care.",
    img: "/src/assets/img9.jpg",
    article: "To keep your laptop running smoothly, avoid overheating by using it on hard surfaces and cleaning vents regularly. Update your OS and drivers to patch vulnerabilities. Use antivirus software and avoid suspicious downloads. Physically protect your device with a sleeve or case, and avoid eating near it. Battery care matters—don’t keep it plugged in 24/7. Back up important data and consider cloud storage. With proper care, your laptop can last 5+ years without major issues."
  }
];

function handleOnClick(){
    setSelected(-1);
    // window.location.reload();
}
function handleOnClickOptions(index){
    setSelected(index);
    // window.location.reload();
}
    if(selected!==-1)return (
        <>
        <section className="blogDetail">
            <button className='backButton' onClick={handleOnClick}>Back</button>
            <div className="blogDetailContainer">
                <img src={blogs[selected].img} style={{width:"180px",height:"180px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",}} alt="Selected Image" />
                {/* <img src={blogs[selected].img} style={{width:"180px",height:"180px"}} alt="Selected Image" /> */}
                <h1>{blogs[selected].title}</h1>
                <p>{blogs[selected].article}</p>
            </div>
        </section>
        <section className="blogs">
            <h2>Explore more</h2>
            <div className="cardGrid">
               
                {blogs.map((blog,index)=>(
                    <div key={index} className="blogCard">
                        <img /*style={{width:"130px",height:"130px"}}*/ loading="eager" src={blog.img} alt="" />
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button onClick={()=>handleOnClickOptions(index)}>Read more</button>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
    
    return (
        <section className="blogs">
            <h2>Latest Blogs</h2>
            <div className="cardGrid">
               
                {blogs.map((blog,index)=>(
                    <div key={index} className="blogCard">
                        <img /*style={{width:"130px",height:"130px"}}*/ loading="eager" src={blog.img} alt="" />
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button onClick={()=>handleOnClickOptions(index)}>Read more</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs