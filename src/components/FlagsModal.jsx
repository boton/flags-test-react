import React from "react";
import PropTypes from "prop-types";
import ClayButton from "@clayui/button";
import ClayModal from "@clayui/modal";

import { spritemap } from "../constants";

const ModalContentDefault = ({
  handleClose,
  urlTermsOfUse,
  reasons,
  handleSubmit,
  isSending
}) => (
  <form onSubmit={handleSubmit}>
    <ClayModal.Body>
      <p>
        You are about to report a violation of our{" "}
        <a href={urlTermsOfUse}>Terms of Use</a>. All reports are strictly
        confidential.
      </p>
      <div className="form-group">
        <label className="control-label" htmlFor="Flags_reason">
          Reason for the Report
        </label>
        <select className="form-control" id="Flags_reason">
          {Object.entries(reasons).map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </ClayModal.Body>
    <ClayModal.Footer
      last={
        <ClayButton.Group spaced>
          <ClayButton disabled={isSending} displayType="primary" type="submit">
            {"Report"}
          </ClayButton>
          <ClayButton displayType="secondary" onClick={handleClose}>
            {"Cancel"}
          </ClayButton>
        </ClayButton.Group>
      }
    />
  </form>
);
ModalContentDefault.propTypes = {
  isSending: PropTypes.bool.isRequired,
  reasons: PropTypes.object.isRequired,
  urlTermsOfUse: PropTypes.string.isRequired
};

const ModalContentSuccess = ({ handleClose, companyName }) => (
  <>
    <ClayModal.Body>
      <p>
        <strong>Thank you for your report.</strong>
      </p>
      <p>
        Although we cannot disclose our final decision, we do review every
        report and appreciate your effort to make sure{" "}
        <strong>{companyName}</strong> is a safe environment for everyone.
      </p>
    </ClayModal.Body>
    <ClayModal.Footer
      last={
        <ClayButton.Group spaced>
          <ClayButton displayType="secondary" onClick={handleClose}>
            {"Close"}
          </ClayButton>
        </ClayButton.Group>
      }
    />
  </>
);
ModalContentSuccess.propTypes = {
  companyName: PropTypes.string.isRequired
};

const FlagsModal = ({
  companyName,
  handleClose,
  handleSubmit,
  isSuccessful,
  isSending,
  reasons,
  urlTermsOfUse
}) => (
  <ClayModal onClose={handleClose} spritemap={spritemap}>
    <ClayModal.Header>Report Inappropriate Content</ClayModal.Header>
    {!isSuccessful ? (
      <ModalContentDefault
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        reasons={reasons}
        urlTermsOfUse={urlTermsOfUse}
        isSending={isSending}
      />
    ) : (
      <ModalContentSuccess
        handleClose={handleClose}
        companyName={companyName}
      />
    )}
  </ClayModal>
);
FlagsModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isSuccessful: PropTypes.bool.isRequired
};

export default FlagsModal;
