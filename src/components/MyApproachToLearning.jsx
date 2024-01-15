import '../index.css';

function MyApproachToLearning({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {description}
      </p>
    </li>
  );
}

export default MyApproachToLearning;
