import React from "react";
import PropTypes from "prop-types";
import ClayButton from "@clayui/button";
import ClayIcon from "@clayui/icon";

import { spritemap } from "../constants";
import FlagsModal from "./FlagsModal";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class Flags extends React.Component {
  static propTypes = {
    enabled: PropTypes.bool,
    message: PropTypes.string.isRequired,
    messageType: PropTypes.string
  };

  static defaultProps = {
    enabled: true,
    // TODO: translate
    message: "Report"
  };

  constructor(props) {
    super(props);

    this.state = {
      reason: Object.values(props.reasons)[0],
      reportDialogOpen: false,
      isSending: false,
      isSuccessful: false
    };

    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitReport = this.handleSubmitReport.bind(this);
  }

  handleClickShow() {
    this.setState({ reportDialogOpen: true });
  }

  handleClickClose() {
    this.setState({ reportDialogOpen: false });
  }

  handleSubmitReport(event) {
    event.preventDefault();

    this.setState({ isSending: true }, () => {
      delay(2000).then(() => this.setState({ isSuccessful: true }));
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log({ state: this.state });
  }

  render() {
    const {
      companyName,
      enabled,
      message,
      reasons,
      pathTermsOfUse
    } = this.props;
    const { reportDialogOpen, isSuccessful, isSending } = this.state;

    return (
      <div>
        <ClayButton
          displayType="secondary"
          disabled={!enabled}
          onClick={this.handleClickShow}
        >
          <span className="inline-item inline-item-before">
            <ClayIcon spritemap={spritemap} symbol="flag-empty" />
          </span>
          {message}
        </ClayButton>
        {reportDialogOpen && (
          <FlagsModal
            companyName={companyName}
            handleClose={this.handleClickClose}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmitReport}
            isSending={isSending}
            isSuccessful={isSuccessful}
            pathTermsOfUse={pathTermsOfUse}
            reason={this.state.reason}
            reasons={reasons}
          />
        )}
      </div>
    );
  }
}

export default Flags;
