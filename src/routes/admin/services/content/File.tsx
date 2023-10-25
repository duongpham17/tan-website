import styles from './File.module.scss';
import {useState} from 'react';
import Spinner from '@components/loading/Spinner';
import {MdClose} from 'react-icons/md'

interface Props {
    id: string,
    src: string[],
    onUpload?: (blob: any) => Promise<void>;
    onDelete?: (cid: string, index: number) => Promise<void>;
}

const File = ({src, onUpload, onDelete, id}: Props) => {

    const [loading, setLoading] = useState(false);

    const [preview, setPreview] = useState<string[]>(src);
    
    const onChangeFile = async (e: any): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const file = e.target.files ? e.target.files : e.dataTransfer.files;
        const objectURLs: string[] = [];
        const files: any[] = [];
        for(let i = 0; i < file.length; i++){
            objectURLs.push(URL.createObjectURL(file[i]));
            files.push(file[i]);
        }
        setPreview(state => [...objectURLs, ...state]);
        if(onUpload) await onUpload(files);
        setLoading(false)
    };

    const onRemoveFile = async (url: string, index: number) => {
        setLoading(true);
        setPreview(state => state.filter(el => el !== url));
        if(onDelete) await onDelete(url.split("/")[2].split(".")[0], index);
        setLoading(false)
    };

    return (
        <div className={styles.container}>

            <div className={styles.upload} onDragOver={(e) => e.preventDefault()} onDrop={onChangeFile}>
                <label htmlFor={`myfile${id}`}>Upload images <br/> or <br/> drag and drop</label>
                <input type="file" id={`myfile${id}`} accept='image/*' className={styles.inputFile} onChange={onChangeFile}/>
            </div>

            <div className={styles.preview}>
                {loading 
                    ? 
                        <Spinner size={20} center />
                    :
                    <div className={styles.images}>
                        {preview.map((el, index) =>
                            <div className={styles.image} key={index}>
                                <img src={el} alt="preview"/>
                                <button onClick={() => onRemoveFile(el, index)}><MdClose /></button>
                            </div>
                        )}
                    </div> 
                }
            </div>

        </div>
    )
}

export default File