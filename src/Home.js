import React from 'react'
import Navbar from './Navbar'
import side1 from './images/side1.svg'
import side2 from './images/side2.svg';
import pic1 from './images/img1.png'
import img2 from './images/img2.png'
import author from './images/author.png';
import teacher from './images/teacher.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <>
    <div className=' min-h-screen max-w-screen'>
    {/* <Navbar/> */}
    <div className='flex flex-row size-full mt-16 md:mt-28'>


    <div className='absolute hidden md:flex bottom-0 left-0 w-3/12'>
          <img src={side1} alt="Side 1"></img>
        </div>

 
<div className='flex flex-col md:w-6/12 w-5/6 mx-auto'>
<h1 className='text-blue-600 md:text-4xl text-3xl md:mx-auto p-2 md:p-6'>  Finding Original Book, Made Easy with plagiarism detector</h1>
<div className='  text-white md:text-2xl text-xl md:mt-3 p-2  md:p-6 '>
Our deep search technology analyzes your book to identify plagiarism and AI, to
          resolve writing issues, and build citations with ease. You wouldn't want to write without
          it.
</div>
 
 {/* <Link to="/login" className=' text-center'> */}
    <Link to="/login" class=" bg-red-500 w-3/5 mx-auto p-2 md:p-5 mt-5 hover:bg-blue-700 text-white text-center font-bold rounded">
          Check for Plagiarism
        {/* </button> */}
        </Link>
        </div>


        <div className='absolute hidden md:flex bottom-0 h-auto right-0 w-1/5 '>
          <img src={side2} alt="Side 2"></img></div>

    </div>
    </div>
    {/* white section starts */}
    <div className=' bg-white min-h-screen' id='explore'>

    <div className=' text-black text-center '>
   <h1 className=' text-4xl font-bold pt-20'>Free Plagiarism Checker: How It Works</h1> 

   {/* first section */}
   <div className=' w-10/12 md:w-4/5 flex flex-col md:flex-row  mx-auto'>
    <div className=' md:w-1/2 mt-10 md:mt-20 text-left'>
        <h1 className=' mt-12 md:text-3xl text-2xl pb-8 font-semibold md:mr-20'>Upload pdf into plagiarism detection tool</h1>
        <div className=' md:text-xl text-lg text-slate-700 md:mr-20'>We make it simple. Just create a pdf of your book and upload it into our plagiarism checker and hit the ‘Check Plagiarism’ button to get started.</div>
    </div>
    <div className=' md:w-1/2 md:mt-20 mt-11 '>
        <img src={pic1} className='rounded md:ml-5 h-auto'/>
    </div>
   </div>

{/* second section */}
   <div className='  md:mt-16 w-10/12 md:w-4/5 flex flex-col md:flex-row-reverse  mx-auto'>
    <div className=' md:w-1/2 mt-14 md:mt-20 text-left md:ml-20'>
        <h1 className=' mt-12 md:text-3xl text-2xl pb-8 font-semibold'>Upload pdf into plagiarism detection tool</h1>
        <div className=' md:text-xl text-lg text-slate-700 '>We make it simple. Just create a pdf of your book and upload it into our plagiarism checker and hit the ‘Check Plagiarism’ button to get started.</div>
    </div>
    <div className=' md:w-1/2 md:mt-20 mt-11 shadow-black '>
        <img src={img2} className='h-auto rounded-lg shadow-slate-800'/>
    </div>
   </div>

   {/* third section */}
   <div className=' md:mt-14 w-10/12 md:w-4/5 flex flex-col pb-28 md:flex-row  mx-auto'>
    <div className=' md:w-1/2 mt-10 md:mt-20 text-left'>
        <h1 className=' mt-12 md:text-3xl text-2xl pb-8 font-semibold md:mr-20'>Upload pdf into plagiarism detection tool</h1>
        <div className=' md:text-xl text-lg text-slate-700 md:mr-20'>We make it simple. Just create a pdf of your book and upload it into our plagiarism checker and hit the ‘Check Plagiarism’ button to get started.</div>
    </div>
    <div className=' md:w-1/2 md:mt-20 mt-11 '>
        <img src={pic1} className=' rounded md:ml-5 h-auto'/>
    </div>
   </div>

    </div>

    </div>

    {/* benefits section */}
    
<div className=' bg-gray-800 mt-16 pb-10 text-white flex flex-col min-h-screen w-screen'>
        <div className=' md:w-3/5 text-center mx-auto  '>
        <h1 className=' font-bold text-4xl p-10'>Plagiarism Checker Benefits</h1>
        <div className=' text-lg text-slate-200 font-normal p-4 '>Whether producing original content or verifying that of others, there’s a lot to gain from using a plagiarism checker. Accurate, automatic detection of duplicate content facilitates the copy-checking process for teachers, students, content writers, and more. Results showing the exact percentage of plagiarized content allows users to see exactly how much text has been copied and where they need to re-word.</div>

        </div>

        <div className=' mt-20 md:w-9/12 mx-auto flex md:flex-row flex-col'>

           <div className=' md:w-1/3 flex flex-col items-center text-center mb-10 '>
           {/* <i class="fa-solid fa-book-open text-red-600 text-6xl"></i> */}
           <img src={teacher} className=' w-16 ' />
           <h1 className=' text-3xl font-semibold pt-5'> For Educational Institutions</h1>
           <div className=' text-base font-light p-6'>The tool enables institutions to uphold academic integrity by ensuring that the teaching materials used in classrooms are authentic and free from piracy or plagiarism.
<br/><br/>
By verifying the authenticity of NCERT textbooks, institutions can maintain the credibility of their educational programs and assessments, fostering an environment of trust and excellence.By utilizing advanced scanning and analysis capabilities, institutions can detect and prevent the use of pirated textbooks, thereby avoiding potential legal disputes and liabilities. </div>
           </div>

           <div className=' md:w-1/3 mb-10  flex md:mb-20 flex-col text-center items-center md:mx-10 '>
           <img src={author} className=' w-16 ' />
           <h1 className=' text-3xl font-semibold pt-5'> For Authors</h1>
           {/* <i class="fa-solid fa-book-open text-red-600 text-6xl"></i> */}
           <div className=' text-base font-light p-6'>The project helps authors protect their original work from unauthorized reproduction and plagiarism. By detecting and deterring piracy, authors can safeguard their intellectual property rights and ensure that their contributions to educational content are respected and acknowledged.
<br/><br/>
By verifying the authenticity of NCERT textbooks, authors can ensure that their work is used in accordance with their intentions and specifications, preserving the integrity of their content and brand.</div>
           </div>

           <div className=' md:w-1/3 flex flex-col text-center '>
           <i class="fa-solid fa-book-open text-red-500 text-6xl"></i>
           <h1 className=' text-3xl font-semibold pt-5'> For Publishers</h1>
           <div className=' text-base font-light p-6'> The project helps publishers protect their intellectual property rights by preventing the unauthorized reproduction and distribution of NCERT textbooks. By detecting and deterring piracy, publishers can safeguard their investments in content creation and distribution, ensuring a fair return on their efforts.

<br/><br/>
Moreover, the project enhances publishers' ability to maintain the integrity of their publishing brands. By producing authentic content and combating piracy, publishers can build trust and credibility with customers, educators, and stakeholders.</div>
           </div>
        </div>
    </div>

    {/* faq section */}
    <div className=' bg-white min-h-screen pb-20' id='faq'>

    <div className=' text-black flex flex-col w-4/6 mx-auto'>
   <h1 className=' text-4xl font-bold pt-20 text-center p-10'>Plagiarism Checker FAQ</h1> 

   <div className='float-left mt-10'>
    <h1 className=' text-3xl font-bold'>What is Plagiarism?</h1>
    <div className='text-base mt-5'>Plagiarism is representing someone else’s work as your own. In educational contexts, there are differing definitions of plagiarism depending on the institution. Plagiarism is considered a violation of academic integrity and a breach of journalistic ethics.</div>
   </div>

   <div className='float-left mt-10'>
    <h1 className=' text-3xl font-bold'>What percentage of a paper can be plagiarized (or copied) and still be considered unique?</h1>
    <div className='text-base mt-5'>Generally speaking, similar or exact copies of another source should be kept under 15% for the total text of the article/paper/essay. As a best practice, citations should be used whenever using another source word-for-word.</div>
   </div>

   <div className='float-left mt-10'>
    <h1 className=' text-3xl font-bold'>What’s the difference between deliberate and accidental plagiarism?</h1>
    <div className='text-base mt-5'>Deliberate plagiarism is purposely copying works from books, articles, webpages, or someone else’s paper and representing it as your original work. Alternatively, accidental plagiarism occurs in a few different ways:</div>
    <ul className=' ml-8 list-disc'>
        <li>Incorrectly citing another person’s works</li>
        <li>Failing to paraphrase another person’s works - even when citing it correctly</li>
        <li>Reusing your own previous papers and inadvertently representing it as a new idea</li>
    </ul>
   </div>

   <div className='float-left mt-10'>
    <h1 className=' text-3xl font-bold'>What’s the difference between deliberate and accidental plagiarism?</h1>
    <div className='text-base mt-5'>Deliberate plagiarism is purposely copying works from books, articles, webpages, or someone else’s paper and representing it as your original work. Alternatively, accidental plagiarism occurs in a few different ways:</div>
     
     <h1 className=' text-xl font-semibold mt-8'>Plagiarism consequences for students</h1>
     <div className='text-base mt-5'>Maintaining academic integrity is a top priority for every educational institution. As already mentioned, ignorance of how to properly cite sources is not an excuse for plagiarism. It is the student’s responsibility to ensure they are submitting work that has not been plagiarized.
<br/><br/>Failure to do so can result in disciplinary action, including an automatic failed grade, removal from a class, or expulsion from a school or university. Students who are allowed to continue at their institution following an act of plagiarism may encounter mistrust and additional scrutiny from teachers and instructors.
</div>

<h1 className=' text-xl font-semibold mt-8'>Plagiarism consequences for students</h1>
     <div className='text-base mt-5'>Maintaining academic integrity is a top priority for every educational institution. As already mentioned, ignorance of how to properly cite sources is not an excuse for plagiarism. It is the student’s responsibility to ensure they are submitting work that has not been plagiarized.
<br/><br/>Failure to do so can result in disciplinary action, including an automatic failed grade, removal from a class, or expulsion from a school or university. Students who are allowed to continue at their institution following an act of plagiarism may encounter mistrust and additional scrutiny from teachers and instructors.
</div>
   </div>

    </div>

    </div>

    <Footer/>



    </>
  )
}

export default Home