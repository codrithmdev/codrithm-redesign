import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { n as services } from "./services-DwCL1mA1.mjs";
import { t as enumType } from "../_libs/zod.mjs";
import { t as Route } from "./contact-CAxMIdml.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-_T-gjU6b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
enumType([
	"project",
	"partnership",
	"general"
]);
function ContactPage() {
	const search = Route.useSearch();
	const [type, setType] = (0, import_react.useState)(search.type);
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		company: "",
		service: search.service ?? "",
		message: "",
		budget: "",
		consent: false
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [notice, setNotice] = (0, import_react.useState)("");
	const project = type === "project";
	const partnership = type === "partnership";
	const messageLabel = project ? "Project description" : partnership ? "Partnership inquiry" : "How can we help?";
	function update(field, value) {
		setValues((current) => ({
			...current,
			[field]: value
		}));
	}
	function checkDetails(event) {
		event.preventDefault();
		const next = {};
		if (!values.name.trim()) next.name = "Enter your name.";
		if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
		if (!values.message.trim()) next.message = "Add a short description of your inquiry.";
		if (!values.consent) next.consent = "Confirm that Codrithm may use these details to respond.";
		setErrors(next);
		setNotice(Object.keys(next).length ? "Please review the highlighted fields." : "Your details look complete. Submission is not enabled yet, so nothing has been sent or stored.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Contact",
		title: "Start with the problem you want to solve.",
		description: "Choose the kind of inquiry, then outline what you need. This form currently checks details locally and does not submit information.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "surface-card max-w-3xl rounded-2xl p-6 sm:p-8",
			noValidate: true,
			onSubmit: checkDetails,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "font-display text-xl",
					children: "Inquiry type"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [
						"project",
						"partnership",
						"general"
					].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `cursor-pointer rounded-full border px-4 py-2 text-sm capitalize transition-colors ${type === option ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "sr-only",
							type: "radio",
							name: "type",
							value: option,
							checked: type === option,
							onChange: () => {
								setType(option);
								setNotice("");
							}
						}), option]
					}, option))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							value: values.name,
							error: errors.name,
							onChange: (value) => update("name", value),
							autoComplete: "name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							value: values.email,
							error: errors.email,
							onChange: (value) => update("email", value),
							autoComplete: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: partnership ? "Organization" : "Company (optional)",
							value: values.company,
							onChange: (value) => update("company", value),
							autoComplete: "organization"
						}),
						project && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm font-medium",
							children: ["Service of interest", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
								value: values.service,
								onChange: (event) => update("service", event.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Not sure yet"
								}), services.filter((service) => service.publishable).map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: service.slug,
									children: service.title
								}, service.slug))]
							})]
						}),
						project && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm font-medium",
							children: [
								"Budget range ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: "(optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
									value: values.budget,
									onChange: (event) => update("budget", event.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Prefer not to say"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "under-1000",
											children: "Under $1,000"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "1000-5000",
											children: "$1,000–$5,000"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "5000-plus",
											children: "$5,000+"
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 grid gap-2 text-sm font-medium",
					children: [
						messageLabel,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "min-h-32 rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
							value: values.message,
							onChange: (event) => update("message", event.target.value),
							"aria-invalid": Boolean(errors.message),
							"aria-describedby": errors.message ? "message-error" : void 0
						}),
						errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							id: "message-error",
							className: "text-sm text-red-300",
							children: errors.message
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 flex gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: values.consent,
						onChange: (event) => update("consent", event.target.checked),
						"aria-invalid": Boolean(errors.consent)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I understand this inquiry is not being sent yet and I consent to Codrithm using these details to respond when a secure contact provider is configured." })]
				}),
				errors.consent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-red-300",
					children: errors.consent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-7 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90",
					children: "Check inquiry details"
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					role: "status",
					children: notice
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs leading-5 text-muted-foreground",
					children: "A Phase 4 submission provider needs a verified recipient, server-side validation, spam protection, privacy approval, and delivery testing before this form can send messages."
				})
			]
		})
	});
}
function Field({ label, value, error, onChange, type = "text", autoComplete }) {
	const id = label.toLowerCase().replaceAll(/[^a-z]+/g, "-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm font-medium",
		htmlFor: id,
		children: [
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				type,
				autoComplete,
				value,
				onChange: (event) => onChange(event.target.value),
				className: "rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
				"aria-invalid": Boolean(error),
				"aria-describedby": error ? `${id}-error` : void 0
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: `${id}-error`,
				className: "text-sm text-red-300",
				children: error
			})
		]
	});
}
//#endregion
export { ContactPage as component };
