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
    companyName: "Liferay",
    enabled: true,
    message: "Report",
    reasons: {
      "harmful-dangerous-acts": "Harmful Dangerous Acts",
      "infringes-my-rights": "Infringes My Rights",
      "sexual-content": "Sexual Content",
      "hateful-or-abusive-content": "Hateful or Abusive Content",
      spam: "Spam",
      "violent-or-repulsive-content": "Violent or Repulsive Content"
    },
    urlTermsOfUse: "https://google.com"
  };

  constructor(props) {
    super(props);

    this.state = {
      reportDialogOpen: false,
      isSending: false,
      isSuccessful: false
    };

    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleSubmitReport = this.handleSubmitReport.bind(this);
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  handleClickShow() {
    this.setState({ reportDialogOpen: true });
  }

  handleClickClose() {
    this.setState({ reportDialogOpen: false });
  }

  handleSubmitReport(e) {
    e.preventDefault();
    debugger;
    this.setState({ isSending: true }, () => {
      delay(2000).then(() => this.setState({ isSuccessful: true }));
    });
  }

  render() {
    const {
      companyName,
      enabled,
      message,
      reasons,
      urlTermsOfUse
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
            handleSubmit={this.handleSubmitReport}
            isSending={isSending}
            isSuccessful={isSuccessful}
            reasons={reasons}
            urlTermsOfUse={urlTermsOfUse}
          />
        )}
      </div>
    );
  }
}

export default Flags;
