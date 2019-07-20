import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "@clayui/css/lib/css/atlas.css";

import Flags from "./components/Flags";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Flags
    companyName="Liferay"
    enabled={true}
    formData={{
      _com_liferay_flags_web_portlet_FlagsPortlet_className:
        "com.liferay.blogs.model.BlogsEntry",
      _com_liferay_flags_web_portlet_FlagsPortlet_classPK: "37969",
      _com_liferay_flags_web_portlet_FlagsPortlet_contentTitle: "holi1",
      _com_liferay_flags_web_portlet_FlagsPortlet_reportedUserId: "20130",
      _com_liferay_flags_web_portlet_FlagsPortlet_contentURL:
        "http://localhost:8080/web/guest/home/-/blogs/holi1?_com_liferay_blogs_web_portlet_BlogsPortlet_redirect=http%3A%2F%2Flocalhost%3A8080%2Fweb%2Fguest%2Fhome%3Fp_p_id%3Dcom_liferay_blogs_web_portlet_BlogsPortlet%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_com_liferay_blogs_web_portlet_BlogsPortlet_cur%3D1%26_com_liferay_blogs_web_portlet_BlogsPortlet_delta%3D20",
      _com_liferay_flags_web_portlet_FlagsPortlet_reporterEmailAddress:
        "test@liferay.com"
    }}
    message={undefined}
    namespace="_com_liferay_flags_web_portlet_FlagsPortlet_"
    pathTermsOfUse="/c/portal/terms_of_use"
    reasons={{
      "harmful-dangerous-acts": "Harmful Dangerous Acts",
      "infringes-my-rights": "Infringes My Rights",
      "sexual-content": "Sexual Content",
      "hateful-or-abusive-content": "Hateful or Abusive Content",
      spam: "Spam",
      "violent-or-repulsive-content": "Violent or Repulsive Content"
    }}
    signedIn={true}
    spritemap="http://localhost:8080/o/classic-theme/images/lexicon/icons.svg"
    uri="http://localhost:8080/web/guest/home?p_p_id=com_liferay_flags_web_portlet_FlagsPortlet&p_p_lifecycle=1&_com_liferay_flags_web_portlet_FlagsPortlet_javax.portlet.action=%2Fflags%2Fedit_entry&p_auth=lXo8QGwP&p_p_auth=McYrhwXf"
  />,
  rootElement
);
