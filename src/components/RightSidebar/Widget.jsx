import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.png'
import comment from '../../assets/comment-alt-solid.png'
import blacklogo from '../../assets/blacklogo.png'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
           <img src={pen} alt='pen' width='18'/>
        <p>Minimizing the downsides of dynamic programming languages</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img src={pen} alt='pen' width='18'/>
        <p>How to build a universal computation machine with Tetris (Ep. 529)</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
           <img src={comment} alt='comment' width='18'/>
        <p>What goes into site sponsorships on SE?</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img src={comment} alt='comment' width='18'/>
        <p>Stack Exchange Q&amp;A access will not be restricted in Russia</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img src={blacklogo} alt='blacklogo' width='18'/>
        <p>Announcing an A/B test for a Trending sort option</p>
        </div>
        <div className='right-sidebar-div-2'>
           <img src={blacklogo} alt='blacklogo' width='18'/>
        <p>New User Experience: Deep Dive into our Research on the Staging Ground How...</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
           <p>10</p>
        <p>Changing initializer-list tag wikipedia will display as shown in the content</p>
        </div>
        <div className='right-sidebar-div-2'>
           <p>15</p> 
        <p>What is the true intention in the "How to reference material written by...</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
