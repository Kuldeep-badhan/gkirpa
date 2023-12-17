import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DocumentRetrieval = () => {
	const [docId, setDocId] = useState("");
	const navigate = useNavigate();

	const handleDocIdChange = (e) => {
		setDocId(e.target.value);
	};

	const handleRetrieveDoc = async () => {
		// Implement your logic for document retrieval here
		navigate(`/checkstudent/${docId}`);
		console.log("Document ID:", docId);
	};

	return (
		<div
			style={{
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h1
				style={{
					marginBottom: "1rem",
					fontSize: "1.5rem",
					fontWeight: "bold",
					textAlign: "center",
				}}
			>
				Student Verification
			</h1>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginBottom: "1rem",
				}}
			>
				<input
					type="text"
					placeholder="Enter Document ID"
					value={docId}
					onChange={handleDocIdChange}
					style={{
						width: "12rem",
						padding: "0.5rem 1rem",
						border: "1px solid #ccc",
						borderRadius: "0.25rem",
						outline: "none",
						boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.2)", // Blue border on focus
					}}
				/>
				<button
					onClick={handleRetrieveDoc}
					style={{
						padding: "0.5rem 1rem",
						marginLeft: "0.5rem",
						color: "#fff",
						backgroundColor: "#007BFF",
						borderRadius: "0.25rem",
						cursor: "pointer",
						transition: "background-color 0.2s",
					}}
				>
					Verify
				</button>
			</div>
		</div>
	);
};

export default DocumentRetrieval;
