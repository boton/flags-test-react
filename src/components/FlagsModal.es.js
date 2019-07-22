import React from "react";
import PropTypes from "prop-types";
import ClayButton from "@clayui/button";
import ClayModal from "@clayui/modal";

import { OTHER_REASONS, spritemap } from "../constants.es";

const ModalContentForm = ({
  handleClose,
  handleInputChange,
  handleSubmit,
  isSending,
  pathTermsOfUse,
  reasons,
  reason
}) => (
  <form onSubmit={handleSubmit}>
    <ClayModal.Body>
      <p>
        You are about to report a violation of our{" "}
        <a href={pathTermsOfUse}>Terms of Use</a>. All reports are strictly
        confidential.
      </p>
      <div className="form-group">
        <label className="control-label" htmlFor="reason">
          Reason for the Report
        </label>
        <select
          className="form-control"
          id="reason"
          name="reason"
          onChange={handleInputChange}
          value={reason}
        >
          {Object.entries(reasons).map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
          <option value={OTHER_REASONS}>Other Reason</option>
        </select>
      </div>
      {reason === OTHER_REASONS && (
        <div className="form-group">
          <label className="control-label" htmlFor="otherReason">
            Other Reason
          </label>
          <input
            className="form-control"
            id="otherReason"
            name="otherReason"
            onChange={handleInputChange}
          />
        </div>
      )}
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
ModalContentForm.propTypes = {
  isSending: PropTypes.bool.isRequired,
  reasons: PropTypes.object.isRequired,
  pathTermsOfUse: PropTypes.string.isRequired
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
  handleInputChange,
  handleSubmit,
  isSending,
  isSuccessful,
  pathTermsOfUse,
  reasons,
  reason
}) => (
  <ClayModal onClose={handleClose} spritemap={spritemap}>
    <ClayModal.Header>Report Inappropriate Content</ClayModal.Header>
    {!isSuccessful ? (
      <ModalContentForm
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSending={isSending}
        pathTermsOfUse={pathTermsOfUse}
        reasons={reasons}
        reason={reason}
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
