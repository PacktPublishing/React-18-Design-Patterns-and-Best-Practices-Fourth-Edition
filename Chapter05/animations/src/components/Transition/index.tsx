import './Transition.css'

import { TransitionGroup } from 'react-transition-group'

const Transition = () => (
  <TransitionGroup transitionName="fade" transitionAppear transitionAppearTimeout={500}>
    <h1>Hello React</h1>
  </TransitionGroup>
);

export default Transition;
