"use client";

export async function clientDownloadFile() {
  // {
  //   pdfUrl,
  //   filename,
  // }: {
  //   pdfUrl: string;
  //   filename: string;
  // }
  //   const fileUrl = pdfUrl!;
  try {
    // Fetch the file
    const response = await fetch(
      "https://bb7xy0ug64.ufs.sh/f/IfFp6TjRCGFmgQggDS6VWuN3LGfEHqlmOTJCodcZe80b1BSI",
    );
    if (!response.ok) {
      throw new Error("File not found");
    }

    // Convert the response to a Blob (binary data)
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob); // Create an object URL for the Blob

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = "Nemesio_Resonable_Jr_CV.pdf"; // Set the filename (get filename from URL)

    // Trigger a click on the link to start the download
    link.click();

    // Clean up the URL object
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed", error);
    throw error;
  }
}
