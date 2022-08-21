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
): Promise<{ content: string; type: string }[]> => {
	const file_list = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		const dataUrl: string = (await fileReader(file)) as any;
		const type = dataUrl.substring(
			dataUrl.indexOf(':') + 1,
			dataUrl.indexOf(';')
		);

		file_list.push({
			content: dataUrl,
			type: type,
		});
	}

	return file_list;
};

const getClipboardData = async (
	ev: ClipboardEvent,
	space_id: number,
	mutation: any,
	refetch: any
) => {
	const files = ev.clipboardData?.files;
	const text = ev.clipboardData?.getData('text');
	if (files && files?.length != 0) {
		const data = await getClipboardFiles(files);
		mutation.mutate(
			{
				space_id: space_id,
				type: 'file',
				value: data,
			},
			{
				onError: (error: any) => {
					throw new Error(error.message);
				},
				onSuccess: () => {
					refetch();
				},
			}
		);
	} else {
		mutation.mutate(
			{
				space_id: space_id,
				type: 'text',
				value: [
					{
						content: text!,
						type: 'text',
					},
				],
			},
			{
				onError: (error: any) => {
					throw new Error(error.message);
				},
				onSuccess: () => {
					refetch();
				},
			}
		);
	}
};

export default getClipboardData;
