import { useFormikContext } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import FormField from 'shared/components/FormField/FormField'
import { Field, FieldType } from 'shared/types/forms'

import { CustomFilters } from '../types/filters'

type Props<T extends FieldType> = {
    fieldKey: string
    field: Field<T>
    persistFilters: Dispatch<SetStateAction<CustomFilters>>
}

export default function FieldWrapper<T extends FieldType>({ fieldKey, field, persistFilters }: Props<T>) {
    const formik = useFormikContext()

    useEffect(() => {
        persistFilters(formik.values as CustomFilters)
    }, [formik.values])

    return <FormField fieldKey={fieldKey} field={field} />
}
