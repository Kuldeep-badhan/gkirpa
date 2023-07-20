import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StudentVerification = () => {
	const [docData, setDocData] = useState(null);
	const [notFound, setNotFound] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		const handleRetrieveDoc = async () => {
			const docId = id;

			try {
				const docRef = doc(db, "students", docId);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const docData = docSnap.data();
					if (docData.downloadURL) {
						setDocData(docData);
					} else {
						setDocData(null);
						console.log("Download URL not found in document");
					}
				} else {
					setDocData(null);
					setNotFound(true);
					alert("Student not found!");
				}
			} catch (error) {
				console.error("Error retrieving document:", error);
			}
		};

		handleRetrieveDoc();
	}, [id]);

	return (
		<div style={{ padding: "1rem 2rem" }}>
			{docData ? (
				<div
					style={{
						padding: "1rem",
						border: "1px solid #ccc",
						borderRadius: "0.25rem",
						marginTop: "2rem",
					}}
				>
					<h2
						style={{
							marginBottom: "0.5rem",
							fontSize: "1.25rem",
							fontWeight: "600",
						}}
					>
						Student Details
					</h2>
					<div style={{ margin: "1rem 0" }}>
						<p style={{ fontWeight: "600" }}>Student Image:</p>
						<img
							src={docData.downloadURL}
							alt="student image"
							width={80}
							height={50}
						/>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: "1rem",
						}}
					>
						<div>
							<p style={{ fontWeight: "600" }}>Student Name:</p>
							<p>{docData.studentName}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>Date Of Birth:</p>
							<p>{docData.dateOfBirth.toString()}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>
								Father&apos;s Name:
							</p>
							<p>{docData.fatherName}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>Address:</p>
							<p>{docData.address}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>Contact Number:</p>
							<p>{docData.contactNo}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>
								Date of Joining:
							</p>
							<p>{docData.dateOfJoining.toString()}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>Course:</p>
							<p>{docData.course}</p>
						</div>
						<div>
							<p style={{ fontWeight: "600" }}>
								Course Duration:
							</p>
							<p>
								{docData.courseDuration.toString() + " Months"}
							</p>
						</div>
					</div>
				</div>
			) : notFound ? (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						minHeight: "60vh",
						gap: "1rem",
					}}
				>
					<strong style={{ fontSize: "1.5rem" }}>
						Student Not Found
					</strong>
					<Link
						to="/"
						style={{
							padding: "0.5rem 1rem",
							color: "#fff",
							backgroundColor: "#007BFF",
							borderRadius: "0.25rem",
							textDecoration: "none",
						}}
					>
						Go back to the homepage
					</Link>
				</div>
			) : (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
						width: "100%",
					}}
				>
					Loading...
				</div>
			)}
		</div>
	);
};

export default StudentVerification;
