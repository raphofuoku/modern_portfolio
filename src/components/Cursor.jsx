import React, { useEffect, useState } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Performance optimization: Use throttled event handling
    let animationFrameId = null;
    
    const updatePosition = (e) => {
      // Cancel any pending animation frames
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Schedule position update on next animation frame
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Fixed handleLinkInteraction function with null checks
    const handleLinkInteraction = (e) => {
      // Guard clause to ensure e.target exists
      if (!e || !e.target) return;
      
      const target = e.target;
      const isLink = 
        (target.tagName && target.tagName.toLowerCase() === 'a') || 
        (target.tagName && target.tagName.toLowerCase() === 'button') ||
        (target.closest && target.closest('a')) || 
        (target.closest && target.closest('button'));
      
      if (isLink) {
        setLinkHovered(e.type === 'mouseenter');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Use event delegation for link/button interactions
    document.addEventListener('mouseover', handleLinkInteraction, true);
    document.addEventListener('mouseout', handleLinkInteraction, true);

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleLinkInteraction, true);
      document.removeEventListener('mouseout', handleLinkInteraction, true);
    };
  }, []);

  const cursorClasses = `cursor ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''}`;
  const followerClasses = `cursor-follower ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''}`;

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className={followerClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};

export default Cursor;