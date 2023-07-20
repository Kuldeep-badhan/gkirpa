import { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import QRCode from "qrcode.react";

const Form = () => {
	const [formData, setFormData] = useState({
		studentName: "",
		issueDate: "",
		fatherName: "",
		courseName: "",
		startDate: "",
		endDate: "",
		grade: "",
		studentId: "",
	});
	const [qrCodeValue, setQRCodeValue] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);

		setQRCodeValue(
			`https://www.gkhchospital.com/checkstudent/${formData.studentId}`
		);

		const existingPdfBytes = await fetch("/ikcertificate.pdf").then((res) =>
			res.arrayBuffer()
		);
		console.log(existingPdfBytes);

		// Load a PDFDocument from the existing PDF bytes
		const pdfDoc = await PDFDocument.load(existingPdfBytes);
		// pdfDoc.registerFontkit(fontkit);

		//get font
		// const fontBytes = await fetch("./Sanchez-Regular.ttf").then((res) =>
		//   res.arrayBuffer()
		// );

		// Embed our custom font in the document
		// const SanChezFont = await pdfDoc.embedFont(fontBytes);

		// Get the first page of the document
		const pages = pdfDoc.getPages();
		const firstPage = pages[0];

		// Draw a string of text diagonally across the first page
		firstPage.drawText(formData.studentId, {
			x: 215,
			y: 353,
			size: 16,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.issueDate, {
			x: 595,
			y: 353,
			size: 16,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.studentName, {
			x: 295,
			y: 320,
			size: 16,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.fatherName, {
			x: 280,
			y: 285,
			size: 16,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.courseName, {
			x: 250,
			y: 250,
			size: 16,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.startDate, {
			x: 326,
			y: 180,
			size: 12,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.endDate, {
			x: 426,
			y: 180,
			size: 12,

			color: rgb(0, 0, 0),
		});
		firstPage.drawText(formData.endDate, {
			x: 660,
			y: 180,
			size: 14,
			color: rgb(0, 0, 0),
		});

		const canvas = document.getElementsByTagName("canvas")[0];

		// Convert the canvas to a data URL
		const dataUrl = canvas.toDataURL();

		// Embed the data URL as an image in the PDF
		const image = await pdfDoc.embedPng(dataUrl);

		// Draw the image on the page
		firstPage.drawImage(image, {
			x: 400,
			y: 18,
			width: 70,
			height: 70,
		});

		// Serialize the PDFDocument to bytes (a Uint8Array)
		const pdfBytes = await pdfDoc.save();
		console.log("Done creating");

		// this was for creating uri and showing in iframe

		// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
		// document.querySelector("#pdf").src = pdfDataUri;

		const file = new File([pdfBytes], "Ik Solution EWS Certificate", {
			type: "application/pdf;charset=utf-8",
		});
		saveAs(file);
	};

	return (
		<div className="max-w-lg p-8 mx-auto my-16 shadow-primary sm:w-[90%] sm:p-4">
			<QRCode value={qrCodeValue} className="hidden" />
			<div className="flex flex-col items-center justify-center gap-8 mb-8 text-center ">
				<h1 className="text-[1.4rem] font-bold text-primary">
					Ik Solution EWS Certificate Generator
				</h1>
			</div>
			<form onSubmit={handleSubmit} className="max-w-md mx-auto ">
				<div className="mb-4">
					<label
						htmlFor="studentId"
						className="block mb-1 font-medium"
					>
						Student Id / Registration Id
					</label>
					<input
						type="text"
						name="studentId"
						id="studentId"
						value={formData.studentId}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="studentName"
						className="block mb-1 font-medium"
					>
						Student Name
					</label>
					<input
						type="text"
						name="studentName"
						id="studentName"
						value={formData.studentName}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="issueDate"
						className="block mb-1 font-medium"
					>
						Certificate Issue Date
					</label>
					<input
						type="date"
						name="issueDate"
						id="issueDate"
						value={formData.issueDate}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="fatherName"
						className="block mb-1 font-medium"
					>
						Student&apos;s Father Name
					</label>
					<input
						type="text"
						name="fatherName"
						id="fatherName"
						value={formData.fatherName}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="courseName"
						className="block mb-1 font-medium"
					>
						Course Name
					</label>
					<input
						type="text"
						name="courseName"
						id="courseName"
						value={formData.courseName}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="startDate"
						className="block mb-1 font-medium"
					>
						Course Start Date
					</label>
					<input
						type="date"
						name="startDate"
						id="startDate"
						value={formData.startDate}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="endDate" className="block mb-1 font-medium">
						Course End Date
					</label>
					<input
						type="date"
						name="endDate"
						id="endDate"
						value={formData.endDate}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="grade" className="block mb-1 font-medium">
						Obtained Grade
					</label>
					<input
						type="text"
						name="grade"
						id="grade"
						value={formData.grade}
						onChange={handleChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 mb-10 text-white bg-blue-500 rounded-md hover:bg-blue-600"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
