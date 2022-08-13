import { invoke } from '@tauri-apps/api/tauri';
import getCodingLanguage from '@twidge/utils/getProgrammingLanguage';

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
): Promise<{ data_url: string; type: string }[]> => {
	const file_list = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		const dataUrl: string = (await fileReader(file)) as any;
		const type = dataUrl.substring(
			dataUrl.indexOf(':') + 1,
			dataUrl.indexOf(';')
		);

		file_list.push({
			data_url: dataUrl,
			type: type,
		});
	}

	return file_list;
};

const getClipboardData = async (ev: ClipboardEvent) => {
	const files = ev.clipboardData?.files;
	const text = ev.clipboardData?.getData('text');

	if (files) {
		const data = await getClipboardFiles(files);
		console.log(data);
		invoke('create_element', {
			data: {
				space_id: 1,
				type: 'file',
				value: data,
			},
		});
	} else {
		console.log(getCodingLanguage(text));
	}
};

export default getClipboardData;
