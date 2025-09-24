import '/src/Components/Blogs/Blogs.css'

function Blogs(){
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
    ]
    return (
        <section className="blogs">
            <h2>Latest Blogs</h2>
            <div className="cardGrid">
               
                {blogs.map((blog,index)=>(
                    <div key={index} className="blogCard">
                        <img /*style={{width:"130px",height:"130px"}}*/ loading="lazy" src={blog.img} alt="" />
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button>Read more</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs