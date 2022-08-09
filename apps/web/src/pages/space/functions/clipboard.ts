const fileReader = (file: File) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = (error) => {
			reject(error);
		};
		reader.readAsDataURL(file);
	});
};

const getClipboardFiles = async (
	files: FileList
): Promise<{ dataURL: string; type: string }[]> => {
	const file_list = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		const dataUrl: string = (await fileReader(file)) as any;
		const type = dataUrl.substring(
			dataUrl.indexOf(':') + 1,
			dataUrl.indexOf(';')
		);

		file_list.push({
			dataURL: dataUrl,
			type: type,
		});
	}

	return file_list;
};

const getClipboardData = async (ev: ClipboardEvent) => {
	const files = ev.clipboardData?.files;
	if (files) {
		console.log(await getClipboardFiles(files));
	}
};

export default getClipboardData;
