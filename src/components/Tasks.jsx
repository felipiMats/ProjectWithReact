import styles from './Tasks.module.css';
import Clipboard from '../assets/Clipboard.svg';
import { Comment } from './Comment';
import plus from '../assets/plus.svg';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function Tasks() {
    const [comments, setComments] = useState([]);
    const [counterChecked, setCounterChecked] = useState(0);
    const [newCommentText, setNewCommentText] = useState('');

    function checkComment(value) {
        if (value == true ) {
            setCounterChecked(prevCount => prevCount + 1);
        } else {
            setCounterChecked(prevCount => prevCount - 1);
        }
    }
    
    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, {
            id: uuidv4(),
            newCommentText, 
        }]);
        setNewCommentText('');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }


    if(comments.length === 0) {
        return (
            <div>
                <div className={styles.newTask}>
                    <input 
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                    />

                    <button onClick={handleCreateNewComment}>
                        Criar
                        <img src={plus} />
                    </button>
                </div>

                <div className={styles.tasksEmpity}>
                    <div className={styles.info}>
                        <div className={styles.created}>
                            <p className={styles.taskCreated}>
                                Tarefas criadas
                            </p>

                            <p className={styles.counterTasks}>
                                <span>0</span>
                            </p>
                        </div>

                        <div className={styles.doneEmpty}>
                            <p className={styles.completedTasks}>
                                Concluídas
                            </p>
                            <p className={styles.doneCounterEmpty}>
                                <span>0</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.empty}>
                        <img src={Clipboard} />
                        <p className={styles.emptyText}>
                            Você ainda não tem tarefas cadastradas
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className={styles.newTask}>
                    <input 
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                    />

                    <button onClick={handleCreateNewComment}>
                        Criar
                        <img src={plus} />
                    </button>
                </div>

                <div className={styles.tasks}>
                    <div className={styles.info}>
                        <div className={styles.created}>
                            <p className={styles.taskCreated}>
                                Tarefas criadas
                            </p>

                            <p className={styles.counterTasks}>
                                <span>{comments.length}</span>
                            </p>
                        </div>

                        <div className={styles.done}>
                            <p className={styles.completedTasks}>
                                Concluídas
                            </p>
                            <p className={styles.doneCounter}>
                                <span>{counterChecked} de {comments.length}</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.list}>
                        {comments.map(task => {
                            return(
                                <Comment 
                                    key={task.id}
                                    content={task}
                                    onDeleteComment={deleteComment}
                                    onCheckCounter={checkComment}

                                />
                            )
                        })}
                        
                    </div>

                </div>
            </div>

        )
    }
}