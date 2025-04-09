import styles from '../../components/MainForm/styles.module.css';

import { SaveIcon } from 'lucide-react';
import Container from '../../components/Container';
import DefaultButton from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {

    useEffect(() => {
        document.title = "Configurações - Chronos Pomodoro";
    }, [])

    const { state, dispatch } = useTaskContext();

    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);


    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        showMessage.dissmiss();

        const formErrors: string[] = [];

        const workValue = workTimeInput.current?.value?.trim();
        const shortBreakValue = shortBreakTimeInput.current?.value?.trim();
        const longBreakValue = longBreakTimeInput.current?.value?.trim();

        const workTime = Number(workValue);
        const shortBreakTime = Number(shortBreakValue);
        const longBreakTime = Number(longBreakValue);

        if (!workValue || !shortBreakValue || !longBreakValue) {
            formErrors.push('Todos os campos devem ser preenchidos.');
        }

        if (
            isNaN(workTime) ||
            isNaN(shortBreakTime) ||
            isNaN(longBreakTime)
        ) {
            formErrors.push('Por favor, insira apenas números válidos.');
        }

        if (
            workTime < 0 ||
            shortBreakTime < 0 ||
            longBreakTime < 0
        ) {
            formErrors.push('Os valores não podem ser negativos.');
        }

        if (workTime < 1 || workTime > 99) {
            formErrors.push('O tempo de foco deve ser entre 1 e 99 minutos.');
        }
        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push('O tempo de descanso curto deve ser entre 1 e 30 minutos.');
        }
        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push('O tempo de descanso longo deve ser entre 1 e 60 minutos.');
        }


        if (formErrors.length > 0) {
            formErrors.forEach(error => showMessage.error(error));
            return;
        }


        dispatch({
            type: TaskActionTypes.CHANGE_SETTINGS,
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime,
            }
        });

        showMessage.sucess('Configurações salvas com sucesso!');
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para tempo de foco, descanso curso e
                    descanso longo.
                </p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action='' className={styles.form}>

                    <div className={styles.formRow}>
                        <DefaultInput
                            maxLength={2}

                            type='number'
                            defaultValue={state.config.workTime}
                            id='workTime' labelText='Foco' ref={workTimeInput} />
                    </div>
                    <div className={styles.formRow}>
                        <DefaultInput
                            maxLength={2}
                            type='number'
                            defaultValue={state.config.shortBreakTime}
                            id='shortBreakTime' labelText='Descanso curto' ref={shortBreakTimeInput} />
                    </div>
                    <div className={styles.formRow}>
                        <DefaultInput
                            maxLength={2}

                            type='number'
                            defaultValue={state.config.longBreakTime}
                            id='longBreakTime' labelText='Descanso longo' ref={longBreakTimeInput} />
                    </div>

                    <div className={styles.formRow}>
                        <DefaultButton

                            icon={<SaveIcon />}
                            aria-label='Salvar configurações'
                            title='Salvar configurações'
                            type='submit'
                        />
                    </div>

                </form>
            </Container>
        </MainTemplate>
    );
}