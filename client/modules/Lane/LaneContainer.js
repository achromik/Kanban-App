import { connect } from "react-redux";
import * as laneActions from './LaneActions';
import { createNoteRequest} from "../Note/NoteActions";
import Lane from './Lane';
import { updateLaneRequest, deleteLaneRequest } from "./LaneActions";

const mapStateToProps = (state, ownProps) => {
    return {
        laneNotes: ownProps.lane.notes.map(noteId => {
            return { ...state.notes[noteId]}
        })
    };
};

const mapDispatchToProps = {
    ...laneActions,
    addNote: createNoteRequest,
    updateLane: updateLaneRequest,
    deleteLane: deleteLaneRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lane);
