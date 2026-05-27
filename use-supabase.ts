import { useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSupabase = () => {
  return useMemo(() => supabase, []);
};
