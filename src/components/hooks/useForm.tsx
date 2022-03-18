import { ChangeEvent, FormEvent, useState } from 'react';

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
    initialValues?: Partial<T>;
    onSubmit?: () => void;
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({});

    const handleChange = <S extends unknown>(
        key: keyof T,
        sanitizeFn?: (value: string) => S
    ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
        setData({
            ...data,
            [key]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors({});
        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleSubmit,
        errors,
    };
};