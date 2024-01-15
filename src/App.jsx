import './index.css';
import Header from './components/Header';
import ButtonSection from './components/ButtonSection';
import TeachingSection from './components/TeachingSection';
import IntroSection from './components/IntroSection';
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState('feedback');

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}
        {tab === 'feedback' && <FeedbackSection />}
      </main>
    </>
  );
}

export default App;
