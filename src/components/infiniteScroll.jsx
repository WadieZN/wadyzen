const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'jQuery', 'PHP', 'SQL', 'TypeScript', 
  'Redux', 'Node.js', 'SASS', 'Tailwind',  'Jest', 'Webpack', 'Git', 'Figma',
  'Responsive Design', 'Testing', 'API Integration', 'AJAX',
];

const InfiniteScroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div className="skill" key={`duplicate-${index}`}>
            {skill}
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default InfiniteScroll;
