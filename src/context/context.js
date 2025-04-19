import { createContext } from "react";

import Image1 from '../assets/images/image.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png'
import Image4 from '../assets/images/Image4.png'
import Image5 from '../assets/images/Image5.png'
import Image6 from '../assets/images/Image6.png'
import Image7 from '../assets/images/Image7.png'
import Image8 from '../assets/images/Image8.png'
import Image9 from '../assets/images/Image9.png'

export const BlogContext = createContext(null)







export const BlogProvider = ({children}) =>{
    const Blogdata = [
        {
            id:1,
            category:"Design",
            title:"UX review presentations",
            description:"How do you create compelling presentations that wow your colleagues and impress your managers? A UX (User Experience) Review is a process where designers or UX experts evaluate a digital product — like a website or app — to identify usability issues and recommend improvements. It's not just about how pretty something looks, but how effectively it works for real people.",
            date:"20 Jan 2022",
            postby:"Olivia Rhye",            
            images: Image1
        },
        {
            id:2,
            category:"Product",
            title:"Migrating to Linear 101",
            description:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            date:"19 Jan 2022",
            postby:"Phoenix Baker",            
            images: Image2
        },
        {
            id:3,
            category:"Software Engineering",
            title:"Building your API Stack",
            description:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            date:"18 Jan 2022",
            postby:"Lana Steiner",            
            images: Image3
        },
        {
            id:4,
            category:"Management",
            title:"Bill Walsh leadership lessons",
            description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            date:"17 Jan 2022",
            postby:"Alec Whitten",            
            images: Image4
        },
        {
            id:5,
            category:"Product",
            title:"PM mental models",
            description:"Mental models are simple expressions of complex processes or relationships.",
            date:"16 Jan 2022",
            postby:"Demi WIlkinson",            
            images: Image5
        },
        {
            id:6,
            category:"Design",
            title:"What is Wireframing?",
            description:"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            date:"15 Jan 2022",
            postby:"Candice Wu",            
            images: Image6
        },
        {
            id:7,
            category:"Design",
            title:"How collaboration makes us better designers",
            description:"Collaboration can make our teams stronger, and our individual designs better.",
            date:"14 Jan 2022",
            postby:"Natali Craig",            
            images: Image7
        },
        {
            id:8,
            category:"Product",
            title:"Our top 10 Javascript frameworks to use",
            description:"JavaScript frameworks make development easy with extensive features and functionalities.",
            date:"13 Jan 2022",
            postby:"Drew Cano",            
            images: Image8
        },
        {
            id:9,
            category:"Customer Success",
            title:"Podcast: Creating a better CX Community",
            description:"Starting a community doesn’t need to be complicated, but how do you get started?",
            date:"12 Jan 2022",
            postby:"Orlando Diggs",            
            images: Image9
        },
       
    ]
    return(
        <BlogContext.Provider value={{Blogdata}}>
            {children}
        </BlogContext.Provider>
    )
}