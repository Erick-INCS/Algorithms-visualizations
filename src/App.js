import "./App.css";
import ActionHistory from "./components/actionHistory/ActionHistory";
import SpaceState from './classes/SpaceState';
import AnimationCanvas from "./components/animationCanvas/AnimationCanvas";
import { connect } from 'react-redux';
import { updateMemory, updateSteps } from './store/actions/actions';
import { classicMethod } from './classes/SpaceState';

const space = new SpaceState(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
    [1, 2, 10],
    [2, 5, 2],
    [3, 4, 4],
]);

function App(props) {
    props.updateMemory(new Array(space.n).fill(0));
    props.updateSteps([
        classicMethod(
            new Array(space.n).fill(0), 
            space.sequence[1][0],
            space.sequence[1][1],
            space.sequence[1][2]
        ),
        classicMethod(
            new Array(space.n).fill(0), 
            space.sequence[0][0],
            space.sequence[0][1],
            space.sequence[0][2]
        ),
    ]);

    return (
        <div className="App">
            <ActionHistory actionList={space.sequence} />
            <AnimationCanvas 
                modification={space.sequence[0]}/>
        </div>
    );
}

export default connect(undefined, { updateMemory, updateSteps })(App);
