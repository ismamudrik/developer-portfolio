import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="github"
				href={socialLinks.github}
				rel="noopener"
				aria-label="Github"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-github" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="linkedin"
				rel="noopener"
				aria-label="Linkedin"
				href={socialLinks.linkedin}
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-linkedin" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="stackoverflow"
				href={socialLinks.stackOverflow}
				rel="noopener"
				aria-label="Stack Overflow"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-stack-overflow" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="email"
				href={socialLinks.email}
				rel="noopener"
				aria-label="Email"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-envelope" />
				</span>
			</Button>
		</div>
	);
};

export default SocialLinks;
