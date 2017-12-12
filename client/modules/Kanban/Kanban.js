import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

import styles from '../Lane/Lane.css';

class Kanban extends React.Component {
  constructor(props) {
    super(props);

    }
   
    componentDidMount() {
      this.props.fetchLanes();
    }  

  
  render() {
    return (
      <div>
        <button 
          className={styles.AddLane}
          onClick={() => this.props.createLane({
            name: 'New lane',
          })}  
        >Add lane</button>
        <Lanes lanes={this.props.lanes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lanes: Object.values(state.lanes),
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
  fetchLanes: fetchLanes,
};

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
  dispatch: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
