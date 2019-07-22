import React from "react";
import PropTypes from "prop-types";
import ClayButton from "@clayui/button";
import ClayIcon from "@clayui/icon";

import { OTHER_REASONS, spritemap } from "../constants.es";
import FlagsModal from "./FlagsModal.es";

import { Liferay } from "../mock";

class Flags extends React.Component {
  static propTypes = {
    enabled: PropTypes.bool,
    message: PropTypes.string.isRequired,
    messageType: PropTypes.string
  };

  static defaultProps = {
    enabled: true,
    message: Liferay.Language.get("report")
  };

  constructor(props) {
    super(props);

    this.state = {
      otherReason: "",
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

  getReason() {
    const { reason, otherReason } = this.state;

    if (reason === OTHER_REASONS) {
      return otherReason || window.Language.get("no-reason-specified");
    }
    return reason;
  }

  handleClickShow() {
    this.setState({ reportDialogOpen: true });
  }

  handleClickClose() {
    this.setState({ reportDialogOpen: false });
  }

  handleSubmitReport(event) {
    event.preventDefault();

    const { namespace, uri } = this.props;

    this.setState({ isSending: true }, () => {
      const baseData = {
        ...this.props.baseData,
        [`${namespace}reason`]: this.getReason()
      };

      const formData = new FormData();

      for (const name in baseData) {
        formData.append(name, baseData[name]);
      }

      fetch(uri, {
        body: formData,
        credentials: "include",
        method: "post"
      })
        .then(() => this.setState({ isSuccessful: true }))
        .catch(() => this.setState({ isFailed: true }));
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.type === "checkbox" ? target.checked : target.value.trim();
    const name = target.name;

    this.setState({
      [name]: value
    });
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
