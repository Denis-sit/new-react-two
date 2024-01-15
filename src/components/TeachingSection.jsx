import '../index.css';
import { ways } from '../data';
import MyApproachToLearning from './MyApproachToLearning';

function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <MyApproachToLearning key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}

export default TeachingSection;
