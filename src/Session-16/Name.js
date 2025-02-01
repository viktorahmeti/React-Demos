import React, { useEffect, useState } from 'react'
import usePersistentState from './usePersistentState'

function Name() {
    const [emri, setEmri] = usePersistentState('emri', '');

    return <input placeholder='Emri' value={emri} onChange={(e) => setEmri(e.target.value)} />
}

export default Name