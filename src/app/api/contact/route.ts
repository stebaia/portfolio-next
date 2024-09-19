import supabaseAdmin from '@/app/lib/supabase-server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, surname, email, telephone, message } = data;


    // Validazione lato server
    if (!name || !surname || !email || !message || !telephone ) {
      return NextResponse.json(
        { success: false, error: 'Tutti i campi obbligatori devono essere compilati.' },
        { status: 400 }
      );
    }

    // Inserisci i dati nel database
    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('contact_form')
      .insert([
        {
          name,
          surname,
          email,
          telephone,
          message,
        },
      ]);

      if (insertError) {
        console.error('Errore nell\'inserimento dei dati:', insertError);
        console.error('Dettagli dell\'errore:', {
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          code: insertError.code,
        });
        return NextResponse.json(
          {
            success: false,
            error: `Errore nell'inserimento dei dati: ${insertError.message || 'Errore sconosciuto'}`,
          },
          { status: 500 }
        );
      }
      

    console.log('Inserimento riuscito:', insertData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Errore nel server:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: `Errore nel server: ${error.message}` },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: 'Errore sconosciuto nel server' },
        { status: 500 }
      );
    }
  }
}
