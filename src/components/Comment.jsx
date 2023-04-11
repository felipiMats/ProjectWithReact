import styles from './Comment.module.css';
import Layer2 from '../assets/Layer2.svg';
import Layer1 from '../assets/Layer1.svg';
import CheckIcon from '../assets/CheckIcon.svg';
import { useState } from 'react';

export function Comment({content, onDeleteComment, onCheckCounter}) {
    const [check, setCheck] = useState(false);

    function handleDeleteComment() {
        onDeleteComment(content)
        
        if (check == true) {
            onCheckCounter(false)
        }
    }

    function handleCheckComment() {
        setCheck(!check);

        if (!check == true) {
            return(onCheckCounter(true))
        } else {
            return(onCheckCounter(false))
        }
        

    }

    return(
        <div>
            <div className={styles.listTask}>
                <div className={!check ? styles.listTaskCheck : styles.listTaskCheckChecked}>
                    <button 
                        onClick={handleCheckComment}> 
                        
                            <img src={!check ? Layer1 : CheckIcon} />
                    </button>
                </div>

                <div className={!check ? styles.listTaskParagraph : styles.listTaskParagraphChecked }>
                    {content.newCommentText}
                </div>

                <div className={styles.listTaskTrash} >
                    <button onClick={handleDeleteComment} title='Deletar Comentário'>
                        <img src={Layer2} />
                    </button>
                    
                </div> 
            </div>
        </div>
    )
}