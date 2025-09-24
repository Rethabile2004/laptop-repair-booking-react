import '/src/Components/Blogs/Blogs.css'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Blogs(){
    const [selected,setSelected]=useState(-1);
    // const navigate=useNavigate();
    const blogs=[
        {
            title:"Basic computer concepts",
            description:"Understanding the fundamentals of computer systems and their components.",
            img:"/src/assets/img2.jpg",
        },{
            title:"Internet and web technologies",
            description:"Exploring the evolution of the internet and its impact on modern communication.",
            img:"/src/assets/img1.jpg",
        },{
            title:"Cybersecurity essentials",
            description:"Learning about common cyber threats and best practices for online safety.",
            img:"/src/assets/img3.jpg",
        }
    ];

    if(selected!==-1)return (
        <section className="blogDetail">
            <button className='backButton' onClick={()=>setSelected(-1)}>Back</button>
            <div className="blogDetailContainer">
                <img src={blogs[selected].img} style={{width:"180px",height:"180px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",}} alt="Selected Image" />
                {/* <img src={blogs[selected].img} style={{width:"180px",height:"180px"}} alt="Selected Image" /> */}
                <h1>{blogs[selected].title}</h1>
                <p>{blogs[selected].description}</p>
            </div>
        </section>
    )
    
    return (
        <section className="blogs">
            <h2>Latest Blogs</h2>
            <div className="cardGrid">
               
                {blogs.map((blog,index)=>(
                    <div key={index} className="blogCard">
                        <img /*style={{width:"130px",height:"130px"}}*/ loading="lazy" src={blog.img} alt="" />
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button onClick={()=>setSelected(index)}>Read more</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs