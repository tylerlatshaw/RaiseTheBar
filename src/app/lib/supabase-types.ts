export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      LogTable: {
        Row: {
          DateCreated: string
          DateUpdated: string
          LogTableId: number
          WorkoutCount: number
        }
        Insert: {
          DateCreated?: string
          DateUpdated?: string
          LogTableId?: number
          WorkoutCount: number
        }
        Update: {
          DateCreated?: string
          DateUpdated?: string
          LogTableId?: number
          WorkoutCount?: number
        }
        Relationships: []
      }
      MuscleGroup: {
        Row: {
          DateCreated: string
          DateUpdated: string
          MuscleGroupId: number
          Name: string
        }
        Insert: {
          DateCreated?: string
          DateUpdated?: string
          MuscleGroupId?: number
          Name?: string
        }
        Update: {
          DateCreated?: string
          DateUpdated?: string
          MuscleGroupId?: number
          Name?: string
        }
        Relationships: []
      }
      Workout: {
        Row: {
          DateCreated: string
          DateUpdated: string
          MaxWeight: number
          MuscleGroupId: number
          UUID: string
          WorkoutDate: string
          WorkoutId: number
          WorkoutNameId: number
        }
        Insert: {
          DateCreated?: string
          DateUpdated?: string
          MaxWeight: number
          MuscleGroupId: number
          UUID: string
          WorkoutDate?: string
          WorkoutId?: number
          WorkoutNameId: number
        }
        Update: {
          DateCreated?: string
          DateUpdated?: string
          MaxWeight?: number
          MuscleGroupId?: number
          UUID?: string
          WorkoutDate?: string
          WorkoutId?: number
          WorkoutNameId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Workout_MuscleGroupId_fkey"
            columns: ["MuscleGroupId"]
            isOneToOne: false
            referencedRelation: "MuscleGroup"
            referencedColumns: ["MuscleGroupId"]
          },
          {
            foreignKeyName: "Workout_UUID_fkey"
            columns: ["UUID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Workout_WorkoutNameId_fkey"
            columns: ["WorkoutNameId"]
            isOneToOne: false
            referencedRelation: "WorkoutNames"
            referencedColumns: ["WorkoutNameId"]
          }
        ]
      }
      WorkoutNames: {
        Row: {
          DateCreated: string
          DateUpdated: string
          Name: string
          WorkoutNameId: number
        }
        Insert: {
          DateCreated?: string
          DateUpdated?: string
          Name: string
          WorkoutNameId?: number
        }
        Update: {
          DateCreated?: string
          DateUpdated?: string
          Name?: string
          WorkoutNameId?: number
        }
        Relationships: []
      }
    }
    Views: {
      OriginalWeights: {
        Row: {
          MaxWeight: number | null
          UUID: string | null
          WorkoutNameId: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Workout_UUID_fkey"
            columns: ["UUID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Workout_WorkoutNameId_fkey"
            columns: ["WorkoutNameId"]
            isOneToOne: false
            referencedRelation: "WorkoutNames"
            referencedColumns: ["WorkoutNameId"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
    Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
    Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database["public"]["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never